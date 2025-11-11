"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import type { EmailReport } from "@/data/mockReports";
import Link from "next/link";

interface EmailCardProps {
  report: EmailReport;
  index: number;
}

export function EmailCard({ report, index }: EmailCardProps) {
  const getVerdictIcon = (score: number) => {
    if (score >= 70) return <XCircle className="h-5 w-5 text-red-500" />;
    if (score >= 40) return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    return <CheckCircle className="h-5 w-5 text-green-500" />;
  };

  const getVerdictColor = (score: number) => {
    if (score >= 70) return "destructive";
    if (score >= 40) return "secondary";
    return "default";
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return "bg-red-500";
    if (score >= 40) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <Link href={`/report/${report.id}`}>
        <Card className="p-6 cursor-pointer backdrop-blur-sm bg-card/50 border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
          <div className="flex items-start gap-4">
            <div className="mt-1">{getVerdictIcon(report.score)}</div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1 truncate">
                    {report.subject}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    From: {report.from}
                  </p>
                </div>
                <Badge variant={getVerdictColor(report.score)} className="shrink-0">
                  {report.verdict}
                </Badge>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Risk Score</span>
                  <span className="font-semibold">{report.score}/100</span>
                </div>
                <div className={`h-2 w-full overflow-hidden rounded-full bg-secondary`}>
                  <div
                    className={`h-full ${getScoreColor(report.score)} transition-all`}
                    style={{ width: `${report.score}%` }}
                  />
                </div>
              </div>

              <div className="mt-3 text-xs text-muted-foreground">
                {new Date(report.timestamp).toLocaleString()}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
