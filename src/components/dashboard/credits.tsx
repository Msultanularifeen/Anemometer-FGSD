import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function CreditsCard() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Project Credits</CardTitle>
        <CardDescription>A Project by BS Physics</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 text-sm">
        <div>
          <h4 className="font-semibold">Mechanical Work</h4>
          <p className="text-muted-foreground">Masoom Ali</p>
        </div>
        <div>
          <h4 className="font-semibold">
            Electronics, Programming & Web Development
          </h4>
          <p className="text-muted-foreground">
            Muhammad Sultan Ul Arifeen
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Special Thanks</h4>
          <p className="text-muted-foreground">
            Principal Azhar Kaisar & Professor Muhammad Farooq Ibadat
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
