"use client";

import { motion } from "framer-motion";
import { mockReports } from "@/data/mockReports";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Dashboard() {
  // TODO: Replace mock data with a request to `/api/reports` once the backend is implemented.
  return (
    <div className="container mx-auto px-6 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-gradient">Threat Reports</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-time email security analysis and threat intelligence
          </p>
        </div>

        <div className="grid gap-4">
          {mockReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={`/report/${report.id}`}>
                <div className="group card-3d p-6 glass-effect rounded-2xl hover:glow-azure cursor-pointer border-l-4 border-l-transparent hover:border-l-primary">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold truncate group-hover:text-primary transition-colors">
                          {report.subject}
                        </h3>
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                          report.score >= 70
                            ? 'bg-destructive shadow-lg shadow-destructive/50'
                            : report.score >= 50
                            ? 'bg-amber-400 shadow-lg shadow-amber-400/40'
                            : 'bg-muted-foreground'
                        }`} />
                      </div>
                      <p className="text-sm text-muted-foreground truncate mb-3">
                        From: {report.from}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-current" />
                          {new Date(report.timestamp).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-current" />
                          {new Date(report.timestamp).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 shrink-0">
                      <div className="text-right">
                        <div className={`text-3xl font-bold mb-1 ${
                          report.score >= 70
                            ? 'text-destructive'
                            : report.score >= 50
                            ? 'text-amber-400'
                            : 'text-foreground'
                        }`}>
                          {report.score}
                        </div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                          Risk Score
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
