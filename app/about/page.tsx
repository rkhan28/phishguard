"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-3xl font-medium mb-4">About PhishGuard</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            PhishGuard uses advanced AI to analyze email content and detect phishing attempts, malicious links, and suspicious patterns.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-medium mb-2">How It Works</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our machine learning algorithms analyze email content, sender information, and behavioral patterns to identify potential threats.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">Key Features</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Real-time threat detection</li>
              <li>• AI-powered pattern recognition</li>
              <li>• Detailed threat analysis</li>
              <li>• Actionable recommendations</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
