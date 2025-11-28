'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAppContext, type SpeedUnit } from '@/contexts/app-context';

export function UnitSelector() {
  const { unit, setUnit } = useAppContext();

  return (
    <Select value={unit} onValueChange={(value: SpeedUnit) => setUnit(value)}>
      <SelectTrigger className="w-28 text-xs font-semibold md:w-32 md:text-sm">
        <SelectValue placeholder="Select unit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="m/s">m/s</SelectItem>
        <SelectItem value="km/h">km/h</SelectItem>
        <SelectItem value="mph">mph</SelectItem>
      </SelectContent>
    </Select>
  );
}
