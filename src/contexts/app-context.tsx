'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type SpeedUnit = 'm/s' | 'km/h' | 'mph';

type AppContextType = {
  unit: SpeedUnit;
  setUnit: (unit: SpeedUnit) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [unit, setUnit] = useState<SpeedUnit>('m/s');

  return (
    <AppContext.Provider value={{ unit, setUnit }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};
