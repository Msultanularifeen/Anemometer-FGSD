'use client';

import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db, isConfigured } from '@/lib/firebase';
import { useToast } from './use-toast';

export interface LatestReading {
  windSpeed: number;
  timestamp: number;
  unit: string;
}

export interface HistoryEntry {
  speed: number;
  timestamp: number;
}

export interface WindStats {
  avg: number | null;
  min: number | null;
  max: number | null;
}

interface WindDataState {
  latest: LatestReading | null;
  history: HistoryEntry[];
  stats: WindStats;
  loading: boolean;
  error: string | null;
}

export function useWindData() {
  const { toast } = useToast();
  const [data, setData] = useState<WindDataState>({
    latest: null,
    history: [],
    stats: { avg: null, min: null, max: null },
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!isConfigured || !db) {
        setData(d => ({...d, error: "Firebase is not configured. Please check your .env.local file.", loading: false}));
        toast({
          variant: "destructive",
          title: "Firebase Configuration Error",
          description: "Please provide Firebase credentials in a .env.local file.",
        });
        return;
    }

    const handleError = (error: Error) => {
      console.error(error);
      const errorMessage =
        'Failed to fetch data from Firebase. Check console and Firebase security rules.';
      setData((d) => ({ ...d, error: errorMessage, loading: false }));
      toast({
        variant: 'destructive',
        title: 'Data Fetch Error',
        description: errorMessage,
      });
    };

    const latestRef = ref(db, 'anemometer/latest');
    const unsubscribeLatest = onValue(
      latestRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setData((d) => ({ ...d, latest: snapshot.val(), error: null }));
        } else {
          setData((d) => ({ ...d, latest: null }));
        }
      },
      handleError
    );

    const historyRef = ref(db, 'anemometer/history');
    const unsubscribeHistory = onValue(
      historyRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const rawHistory: Record<string, HistoryEntry> = snapshot.val();
          const historyData: HistoryEntry[] = Object.values(rawHistory).sort(
            (a, b) => a.timestamp - b.timestamp
          );

          const oneHourAgo = Math.floor(Date.now() / 1000) - 3600;
          const lastHourData = historyData.filter(
            (entry) => entry.timestamp >= oneHourAgo
          );

          let stats: WindStats = { avg: null, min: null, max: null };
          if (lastHourData.length > 0) {
            const speeds = lastHourData.map((entry) => entry.speed);
            stats.max = Math.max(...speeds);
            stats.min = Math.min(...speeds);
            stats.avg =
              speeds.reduce((sum, speed) => sum + speed, 0) / speeds.length;
          }

          setData((d) => ({
            ...d,
            history: historyData,
            stats,
            loading: false,
            error: null,
          }));
        } else {
          setData((d) => ({ ...d, history: [], stats: {avg: null, min: null, max: null}, loading: false }));
        }
      },
      handleError
    );

    return () => {
      unsubscribeLatest();
      unsubscribeHistory();
    };
  }, [toast]);

  return data;
}
