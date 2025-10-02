import { Rocket, Info, CheckCircle2, Package, Settings, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import screenshot1 from "@/assets/getting-started-1.png";
import screenshot2 from "@/assets/getting-started-2.png";
import screenshot3 from "@/assets/getting-started-3.png";
import screenshot4 from "@/assets/getting-started-4.png";
import screenshot5 from "@/assets/getting-started-5.png";
import screenshot6 from "@/assets/getting-started-6.png";

export default function GettingStarted() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Creating Your First Checkout Charity Campaign
        </h1>
        <p className="text-lg text-muted-foreground">
          Follow this step-by-step guide to set up and launch your first donation campaign in Fandy.
        </p>
      </div>

      <Alert className="border-primary/30 bg-primary/5">
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Quick Access:</strong> After installation, find Fandy under <strong>Shopify Admin → Apps → Fandy</strong>
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        {/* Step 0: Installation */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">0</span>
            Installation
          </h2>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-3">
              <p className="text-muted-foreground">
                Install the app via the <strong>Shopify App Store</strong>. Once installed, you'll be redirected to the Fandy onboarding dashboard inside your Shopify Admin.
              </p>
              <p className="text-muted-foreground">
                Fandy App will appear under: <code className="px-2 py-1 bg-muted rounded text-sm">Shopify Admin → Apps → Fandy</code>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Step 1: Access Dashboard */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
            Access the Dashboard
          </h2>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-3">
              <p className="text-muted-foreground">
                After installation, open the Fandy app from your Shopify admin. You'll be welcomed with a clean dashboard.
              </p>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Rocket className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm text-foreground">
                  Click <strong>"Create campaign"</strong> to get started.
                </p>
              </div>
              <div className="mt-4 rounded-lg overflow-hidden border border-border/30">
                <img src={screenshot1} alt="Fandy Dashboard - Create Campaign" className="w-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 2: Campaign Type */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
            Select Campaign Type
          </h2>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                Choose the donation model for your campaign:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                  <h3 className="font-semibold text-primary mb-3">Customer-Funded Options <span className="text-xs text-muted-foreground">(Customer pays)</span></h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Fixed Amounts</strong> – Set 3–5 predefined values (e.g. $1, $3, $5, $10, $20)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Percentage</strong> – Let customers add a % of their cart total as a donation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Round-Up</strong> – Automatically round cart totals to the nearest dollar or ten</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                  <h3 className="font-semibold text-accent mb-3">Store-Funded Option <span className="text-xs text-muted-foreground">(Store pays)</span></h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Upsell with Donations</strong> – Define rules like:</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-xs">
                      <li>• Spend $50 → Store donates $25</li>
                      <li>• Spend $100 → Store donates 10%</li>
                    </ul>
                    <p className="ml-6 text-xs">You can add multiple variants with different thresholds and values.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground pt-2">
                Click <strong>"Next"</strong> when you've selected a campaign type.
              </p>
              <div className="space-y-4 mt-4">
                <div className="rounded-lg overflow-hidden border border-border/30">
                  <img src={screenshot2} alt="Select Campaign Type - Customer Funded Options" className="w-full" />
                </div>
                <div className="rounded-lg overflow-hidden border border-border/30">
                  <img src={screenshot3} alt="Select Campaign Type - Store Funded Options" className="w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 3: Select Causes */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">3</span>
            Select Causes
          </h2>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                Define which charities will receive the donations. You have two options:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-lg border border-border/50 bg-background/50">
                  <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Automated Causes
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fandy will automatically match each customer with relevant local charities based on their location and interests.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg border border-border/50 bg-background/50">
                  <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Manual Selection
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Choose specific nonprofit organizations from our database.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Highlight one as a featured cause</li>
                    <li>• Limit or exclude specific causes from automated matching</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-muted-foreground pt-2">
                Click <strong>"Next"</strong> to continue.
              </p>
              <div className="space-y-4 mt-4">
                <div className="rounded-lg overflow-hidden border border-border/30">
                  <img src={screenshot4} alt="Select Causes - Automated Causes" className="w-full" />
                </div>
                <div className="rounded-lg overflow-hidden border border-border/30">
                  <img src={screenshot5} alt="Select Causes - Manual Selection and Featured Cause" className="w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 4: Subscription Plan */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">4</span>
            Choose Subscription Plan
          </h2>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground mb-4">
                Select your preferred pricing plan:
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-5 rounded-lg border border-primary/30 bg-primary/5">
                  <h3 className="font-semibold text-primary mb-1">Basic Plan</h3>
                  <p className="text-xs text-muted-foreground mb-3">Pay-As-You-Give</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>$0.50 per transaction</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>No monthly fee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Basic donation logic and reporting</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-lg border border-accent/30 bg-accent/5">
                  <h3 className="font-semibold text-accent mb-1">Pro Plan</h3>
                  <p className="text-xs text-muted-foreground mb-3">Growth & Personalization</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>$99/month</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Cause geography and preferences matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Advanced analytics and charity feedback tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>7-day free trial</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              <Alert className="border-muted bg-muted/30">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Optional:</strong> Add physical donation cards at $0.15 each
                </AlertDescription>
              </Alert>

              <p className="text-sm text-muted-foreground pt-2">
                Click <strong>"Subscribe"</strong> to activate your plan.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Step 5: Configure Matching */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">5</span>
            Configure Matching Options
          </h2>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                Fine-tune how causes are matched and how reports are generated. You can enable or disable:
              </p>
              
              <div className="space-y-2">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Match by geography</p>
                    <p className="text-xs text-muted-foreground">Show local causes based on the shopper's location</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Match by preferences</p>
                    <p className="text-xs text-muted-foreground">Recommend charities based on shopping behavior</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Donor reports</p>
                    <p className="text-xs text-muted-foreground">Send impact updates to customers after each donation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Match by holidays</p>
                    <p className="text-xs text-muted-foreground">Auto-launch themed campaigns (e.g. Earth Day, Giving Tuesday)</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground pt-2">
                Click <strong>"Next"</strong> when done.
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-border/30">
                <img src={screenshot6} alt="Configure Matching Options" className="w-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 6: Finish */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">6</span>
            Finish Setup
          </h2>
          <Card className="border-accent/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Rocket className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Campaign Ready!</h3>
                  <p className="text-muted-foreground mb-3">
                    Once all steps are completed, you'll see a confirmation screen. Click <strong>"Go to dashboard"</strong> to manage or launch additional campaigns.
                  </p>
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm text-foreground flex items-center gap-2">
                      <BarChart className="h-4 w-4 text-primary" />
                      Your first checkout charity campaign is now live. Once live you can edit your campaigns using <strong>Campaigns</strong> and <strong>Settings</strong> tabs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
