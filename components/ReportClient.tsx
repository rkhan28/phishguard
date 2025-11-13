"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { EmailReport } from "@/data/mockReports";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ReportClientProps {
  report: EmailReport;
}

export function ReportClient({ report }: ReportClientProps) {
  const router = useRouter();

  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <Button variant="ghost" onClick={() => router.back()} className="gap-2 -ml-4">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <div>
          <h1 className="text-3xl font-medium mb-2">{report.subject}</h1>
          <p className="text-muted-foreground">{report.from}</p>
          <p className="text-sm text-muted-foreground mt-1">
            {new Date(report.timestamp).toLocaleDateString()}
          </p>
        </div>

        <div className="p-6 border rounded-lg space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium">Risk Assessment</h2>
              <div className="text-right">
                <div className={`text-3xl font-medium ${report.score >= 70 ? 'text-destructive' : report.score >= 50 ? 'text-amber-400' : 'text-foreground'}`}>
                  {report.score}
                </div>
                <div className="text-sm text-muted-foreground">Risk Score</div>
              </div>
            </div>
            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div
                className={`h-full transition-all ${report.score >= 70 ? 'bg-destructive' : report.score >= 50 ? 'bg-amber-400' : 'bg-foreground'}`}
                style={{ width: `${report.score}%` }}
              />
            </div>
          </div>

          {report.body && (
            <div>
              <h3 className="font-medium mb-2">Email Content</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                {report.body}
              </p>
            </div>
          )}

          <div>
            <h3 className="font-medium mb-2">Threat Indicators</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {report.indicators.map((indicator, index) => (
                <li key={index}>• {indicator}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Recommended Actions</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {report.actions.map((action, index) => (
                <li key={index}>• {action}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
