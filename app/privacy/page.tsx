"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground">
                How we protect and handle your personal data
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12 max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Privacy Policy</h2>
            <p className="text-sm text-muted-foreground">Last updated: 2026</p>
          </div>
        </div>

        <section className="space-y-4 text-muted-foreground leading-relaxed">
          <h3 className="text-lg font-semibold text-foreground">1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us when creating an account, updating your profile, or making payments through our payment gateway (such as your email and name).
          </p>

          <h3 className="text-lg font-semibold text-foreground">2. How We Use Information</h3>
          <p>
            We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you about your account.
          </p>

          <h3 className="text-lg font-semibold text-foreground">3. Data Security</h3>
          <p>
            We implement industry-standard security measures to safeguard your personal data. Authentication is securely managed by Supabase, and payments are processed via PCI-DSS compliant providers.
          </p>

          <h3 className="text-lg font-semibold text-foreground">4. Contact Us</h3>
          <p>
            If you have questions about this Privacy Policy, please contact us through our official support channels.
          </p>
        </section>
      </div>
    </div>
  );
}