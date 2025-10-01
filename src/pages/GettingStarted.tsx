import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Settings, CheckCircle2 } from "lucide-react";

export default function GettingStarted() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
          <Rocket className="h-3 w-3" />
          Quick Start
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Getting Started with Fandy</h1>
        <p className="text-lg text-muted-foreground">
          Follow these steps to set up your first campaign and start making an impact.
        </p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/20">
            <Settings className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Before You Begin</h2>
            <p className="text-foreground/90">
              Make sure you have installed the Fandy app from the Shopify App Store and have admin access to your store.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Setup Steps</h2>
        
        <Card className="p-6 bg-card/50 border-border">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Install Fandy App</h3>
              <p className="text-foreground/90 mb-4">
                Visit the Shopify App Store and search for "Fandy". Click "Add app" and follow the authorization process.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://apps.shopify.com" target="_blank" rel="noopener noreferrer">
                  Visit App Store
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 border-border">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Choose Your Campaign Type</h3>
              <p className="text-foreground/90 mb-4">
                Decide whether you want to run a customer-funded or store-funded campaign (or both!).
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="font-medium mb-1">Customer-Funded</p>
                  <p className="text-sm text-muted-foreground">Best for engagement and customer loyalty</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="font-medium mb-1">Store-Funded</p>
                  <p className="text-sm text-muted-foreground">Best for driving conversions and AOV</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 border-border">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Configure Donation Logic</h3>
              <p className="text-foreground/90 mb-4">
                Select how donations will be collected:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom amount, fixed amounts, percentage, or round-up</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Set minimum and maximum donation values if needed</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Configure suggested amounts for quick selection</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 border-border">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
              4
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Select Causes</h3>
              <p className="text-foreground/90 mb-4">
                Choose how causes are selected for your campaigns:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-primary">●</span> Automated Matching
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Let Fandy's AI select causes based on customer location and preferences
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-primary">●</span> Featured Cause
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Choose a specific charity that aligns with your brand values
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-primary">●</span> Custom Selection
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Curate a list of approved organizations for donation distribution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 border-border">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
              5
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Customize Checkout Display</h3>
              <p className="text-foreground/90 mb-4">
                Personalize how the donation prompt appears at checkout:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Edit display text and call-to-action</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Upload cause images and logos</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Preview on desktop and mobile</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 border-border">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
              6
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Test Your Campaign</h3>
              <p className="text-foreground/90 mb-4">
                Before going live, run a test order to ensure everything works correctly:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Use Shopify's test mode or Bogus Gateway</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Verify donation amounts calculate correctly</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Check that cause information displays properly</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 border-border">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
              7
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Launch & Monitor</h3>
              <p className="text-foreground/90 mb-4">
                Activate your campaign and track its performance:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Turn on your campaign in the Fandy dashboard</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Monitor donation rates and total impact</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Analyze campaign performance and optimize</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="text-foreground/90 mb-4">
          Our support team is here to help you get started. Reach out anytime!
        </p>
        <div className="flex gap-3">
          <Button variant="default" asChild>
            <a href="mailto:support@fandy.me">Contact Support</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://calendly.com/yurakuh" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
}
