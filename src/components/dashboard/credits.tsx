import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CreditItem = ({ title, name }: { title: string; name: string }) => (
  <div className="flex items-center justify-between">
    <p className="text-sm font-medium text-muted-foreground">{title}</p>
    <p className="text-sm font-semibold">{name}</p>
  </div>
);

export function CreditsCard() {
  return (
    <Card className="shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle>Project Credits</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-3">
          <CreditItem title="Mechanical Work" name="Masoom Ali" />
          <Separator />
          <CreditItem
            title="Electronics, Programming & Web"
            name="Muhammad Sultan Ul Arifeen"
          />
        </div>
        <Separator />
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            Special Thanks
          </p>
          <p className="text-right text-sm font-semibold">
            Principal Azhar Kaisar
            <br />
            Professor Muhammad Farooq Ibadat
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
