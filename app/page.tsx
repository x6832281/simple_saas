"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import { PricingSection } from "@/components/pricing-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background -z-10" />

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-secondary text-secondary-foreground">
                SaaS Starter Scaffold
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Your Next SaaS Starts Here
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[650px] mx-auto">
                A clean, minimal foundation with Supabase Auth, Creem Payments, and credit-based billing. Ready for your custom business logic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
              <Link href="/sign-up">
                <Button size="lg" className="w-full sm:w-auto h-11 px-8 text-base gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-11 px-8 text-base">
                  Dashboard
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Highlights */}
      <section id="features" className="py-20 bg-muted/30 border-b">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Core Infrastructure</h2>
            <p className="text-muted-foreground text-base">Pre-configured essentials so you can focus on building your product.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-6 rounded-xl border space-y-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold">Supabase Auth & DB</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Email & Google OAuth ready. PostgreSQL schema with RLS protection out of the box.
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl border space-y-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold">Creem.io Payments</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Support for global cards & Alipay. Full webhook handling for recurring subscriptions.
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl border space-y-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold">Credits System</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built-in credit top-up and audit history table, tailored for pay-as-you-go AI tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>
    </div>
  );
}
