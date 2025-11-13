"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Zap, Lock, Eye, Mail, Copy, Check } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const [threatsBlocked, setThreatsBlocked] = useState(125847);
  const [emailsScanned, setEmailsScanned] = useState(2543921);
  const [activeUsers, setActiveUsers] = useState(12459);
  const [copied, setCopied] = useState(false);

  const testEmail = "test@phishguard.ai";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(testEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    // TODO: Replace simulated counters with real-time stats from `/api/overview` when backend endpoints are ready.
    const interval = setInterval(() => {
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 3));
      setEmailsScanned(prev => prev + Math.floor(Math.random() * 15));
      setActiveUsers(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-10"
          >
            {/* Hero Icon */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-background to-muted border border-border flex items-center justify-center shadow-lg">
                  <Shield className="h-10 w-10 text-primary" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              >
                <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  PhishGuard
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed"
              >
                AI-powered email security that detects and neutralizes phishing threats in real-time
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="btn-glisten group h-12 px-8 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all"
                >
                  Launch Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-glisten h-12 px-8 text-base font-medium border-2 hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    Test Email Security
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-2xl">
                      <Mail className="h-6 w-6 text-primary" />
                      Test Email Security
                    </DialogTitle>
                    <DialogDescription className="text-base pt-2">
                      Send an email to the address below for your first 3 free email security reports
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                      <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <code className="flex-1 text-base font-mono text-foreground">
                        {testEmail}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={copyToClipboard}
                        className="flex-shrink-0"
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p className="flex items-start gap-2">
                        <span className="text-primary font-semibold mt-0.5">•</span>
                        <span>Send any suspicious email to this address</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-primary font-semibold mt-0.5">•</span>
                        <span>Receive a detailed security report within minutes</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-primary font-semibold mt-0.5">•</span>
                        <span>Get 3 free reports to test our AI-powered analysis</span>
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Live Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-3"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-all" />
                <div className="relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {threatsBlocked.toLocaleString()}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">
                    Threats Blocked
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-all" />
                <div className="relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {emailsScanned.toLocaleString()}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">
                    Emails Scanned
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-all" />
                <div className="relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {activeUsers.toLocaleString()}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">
                    Active Users
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Zap,
                title: "Real-Time Detection",
                description: "Instant threat analysis with advanced machine learning algorithms"
              },
              {
                icon: Lock,
                title: "Enterprise Security",
                description: "Military-grade encryption keeps your sensitive data protected"
              },
              {
                icon: Eye,
                title: "Deep Analysis",
                description: "Multi-layer scanning identifies even the most sophisticated attacks"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
