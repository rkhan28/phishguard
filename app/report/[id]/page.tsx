import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockReports } from "@/data/mockReports";
import { ReportClient } from "@/components/ReportClient";
import Link from "next/link";

export function generateStaticParams() {
  return mockReports.map((report) => ({
    id: report.id.toString(),
  }));
}

export default function ReportPage({ params }: { params: { id: string } }) {
  const report = mockReports.find((r) => r.id === parseInt(params.id));

  if (!report) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Report Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The email report you're looking for doesn't exist.
          </p>
          <Link href="/">
            <Button>Back to Dashboard</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return <ReportClient report={report} />;
}
