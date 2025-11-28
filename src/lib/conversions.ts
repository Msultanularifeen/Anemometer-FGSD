import type { SpeedUnit } from '@/contexts/app-context';

export const mpsToKph = (mps: number): number => mps * 3.6;
export const mpsToMph = (mps: number): number => mps * 2.23694;

export const convertSpeed = (speed: number, toUnit: SpeedUnit): number => {
  switch (toUnit) {
    case 'km/h':
      return mpsToKph(speed);
    case 'mph':
      return mpsToMph(speed);
    case 'm/s':
    default:
      return speed;
  }
};
