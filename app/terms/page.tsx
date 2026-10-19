"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale } from "lucide-react";

export default function TermsPage() {
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
              <h1 className="text-xl font-bold">Terms of Service</h1>
              <p className="text-sm text-muted-foreground">
                Terms and conditions for using our service
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12 max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <Scale className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Terms of Service</h2>
            <p className="text-sm text-muted-foreground">Last updated: 2026</p>
          </div>
        </div>

        <section className="space-y-4 text-muted-foreground leading-relaxed">
          <h3 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h3>
          <p>
            By accessing or using our service, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h3 className="text-lg font-semibold text-foreground">2. User Accounts</h3>
          <p>
            You are responsible for safeguarding your account credentials and for any activities or actions performed under your account.
          </p>

          <h3 className="text-lg font-semibold text-foreground">3. Subscriptions and Payments</h3>
          <p>
            Certain services are billed on a subscription or credits basis. All payments and credit top-ups are non-refundable unless required by applicable law.
          </p>

          <h3 className="text-lg font-semibold text-foreground">4. Termination</h3>
          <p>
            We reserve the right to suspend or terminate your account at any time if you violate these terms or misuse the service.
          </p>
        </section>
      </div>
    </div>
  );
}