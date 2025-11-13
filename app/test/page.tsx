"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Shield } from "lucide-react";
import type { EmailReport } from "@/data/mockReports";

export default function TestPage() {
  const [emailText, setEmailText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<EmailReport | null>(null);

  const analyzeEmail = async () => {
    if (!emailText.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    // TODO: Replace the timeout with a POST request to `/api/analyze` when the backend is available.
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const suspiciousKeywords = ["urgent", "immediate", "verify", "suspended", "click here", "act now", "limited time"];
    const lowerText = emailText.toLowerCase();
    const suspiciousCount = suspiciousKeywords.filter((kw) => lowerText.includes(kw)).length;
    let score = Math.min(30 + suspiciousCount * 15, 95);

    const mockResult: EmailReport = {
      id: Date.now(),
      from: "analyzed@test.com",
      subject: "Email Security Analysis",
      score,
      verdict: score >= 70 ? "Critical Threat" : score >= 50 ? "High Risk" : "Low Risk",
      timestamp: new Date().toISOString(),
      body: emailText,
      actions: score >= 70
        ? ["DO NOT interact with this email", "Report to security team immediately", "Delete and block sender"]
        : score >= 50
        ? ["Verify sender through official channels", "Do not click any links", "Exercise extreme caution"]
        : ["Email appears legitimate", "Verify sender if unexpected", "Proceed with normal caution"],
      indicators: score >= 50
        ? ["Suspicious urgency detected", "Potential social engineering", "Unusual sender patterns", "High-risk characteristics"]
        : ["Standard email format", "No immediate threats detected", "Low-risk assessment"]
    };

    setResult(mockResult);
    setIsAnalyzing(false);
  };

  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-gradient">Email Security Test</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Advanced AI analysis for phishing detection and threat assessment
          </p>
        </div>

        <div className="space-y-6">
          <div className="glass-effect p-8 rounded-2xl space-y-6">
            <Textarea
              value={emailText}
              onChange={(e) => setEmailText(e.target.value)}
              placeholder="Paste email content here for analysis...&#10;&#10;Include the full email body, subject line, and any suspicious elements."
              className="min-h-[280px] text-base resize-none border-2 focus:border-primary transition-colors"
              disabled={isAnalyzing}
            />
            <Button
              onClick={analyzeEmail}
              disabled={!emailText.trim() || isAnalyzing}
              className="w-full h-14 text-lg font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                  Analyzing Threat Vectors...
                </>
              ) : (
                <>
                  <Shield className="mr-3 h-5 w-5" />
                  Run Security Analysis
                </>
              )}
            </Button>
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-effect p-8 rounded-2xl space-y-8 glow-azure"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Analysis Results</h2>
                  <div className="text-right">
                    <div className={`text-5xl font-bold mb-1 ${
                      result.score >= 70 ? 'text-destructive' : result.score >= 50 ? 'text-amber-400' : 'text-foreground'
                    }`}>
                      {result.score}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Risk Level</div>
                  </div>
                </div>
                <div className="relative h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${result.score}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      result.score >= 70 ? 'bg-destructive' : result.score >= 50 ? 'bg-amber-400' : 'bg-foreground'
                    }`}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-primary rounded-full" />
                    Threat Indicators
                  </h3>
                  <ul className="space-y-3">
                    {result.indicators.map((indicator, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">▪</span>
                        <span>{indicator}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-primary rounded-full" />
                    Recommended Actions
                  </h3>
                  <ul className="space-y-3">
                    {result.actions.map((action, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">▪</span>
                        <span>{action}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
