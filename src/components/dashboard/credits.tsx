import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CreditItem = ({ title, name }: { title: string; name: string }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <p className="font-semibold text-foreground">{name}</p>
    <p className="text-sm text-muted-foreground">{title}</p>
  </div>
);

export function CreditsCard() {
  return (
    <Card className="shadow-lg border-2 border-dashed">
      <CardHeader className="text-center">
        <CardDescription>A Project by</CardDescription>
        <CardTitle className="text-2xl">BS Physics - Batch 2024</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-4 rounded-lg border bg-card p-4 text-center md:text-left">
          <CreditItem name="Masoom Ali" title="Mechanical Work" />
          <Separator />
          <CreditItem
            name="Muhammad Sultan Ul Arifeen"
            title="Electronics, Programming & Web"
          />
        </div>
        <div className="grid gap-2 rounded-lg border bg-card p-4">
          <p className="text-sm font-medium text-center text-muted-foreground">
            Special Thanks
          </p>
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:justify-around">
            <p className="font-semibold text-foreground">
              Principal Azhar Kaisar
            </p>
            <p className="font-semibold text-foreground">
              Professor Muhammad Farooq Ibadat
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
