import { Card } from "@/components/ui/card";

export default function UnderstandingCampaigns() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
          Campaign Basics
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Understanding Campaigns in Fandy</h1>
        <p className="text-lg text-muted-foreground">
          Learn how campaigns work and how to configure them for your store's impact strategy.
        </p>
      </div>

      <Card className="p-6 bg-card/50 border-border">
        <h2 className="text-2xl font-semibold mb-4">What Is a "Campaign" in Fandy?</h2>
        <p className="text-foreground/90 leading-relaxed">
          In Fandy, a campaign defines how donations are collected and where they are directed. Campaigns are the core 
          configuration unit in the app, allowing you to tailor your store's impact strategy.
        </p>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Campaign Types</h2>
        <p className="text-muted-foreground">
          There are two main campaign types, each designed for different use cases:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Campaign Type</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Who Pays?</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Trigger</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Goal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-medium text-primary">Customer-funded</td>
                <td className="py-3 px-4">Customer</td>
                <td className="py-3 px-4">During checkout (opt-in)</td>
                <td className="py-3 px-4">Increase customer engagement and loyalty</td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-medium text-primary">Store-funded</td>
                <td className="py-3 px-4">Store</td>
                <td className="py-3 px-4">Based on customer actions (e.g. spend threshold)</td>
                <td className="py-3 px-4">Drive conversion and brand goodwill</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground italic">
          Each campaign type can be configured with flexible donation logic and cause distribution settings.
        </p>
      </div>

      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-12 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-semibold">Customer-Funded Campaigns</h2>
        </div>
        
        <Card className="p-6 bg-card/50 border-border">
          <p className="text-foreground/90 mb-6">
            These campaigns let customers contribute to a charitable cause during the checkout process.
          </p>
          
          <h3 className="text-xl font-semibold mb-4 text-primary">Donation Logic Options</h3>
          
          <div className="space-y-4">
            <div className="pl-6 border-l-2 border-primary/30">
              <h4 className="font-semibold mb-1">Custom Amount</h4>
              <p className="text-muted-foreground">The customer manually enters a donation amount.</p>
            </div>
            
            <div className="pl-6 border-l-2 border-primary/30">
              <h4 className="font-semibold mb-1">Fixed Amounts</h4>
              <p className="text-muted-foreground">You define 3–5 preset amounts that appear as one-click options.</p>
            </div>
            
            <div className="pl-6 border-l-2 border-primary/30">
              <h4 className="font-semibold mb-1">Percentage of Order</h4>
              <p className="text-muted-foreground">Customers add a percentage of their cart total as a donation (e.g. 5%).</p>
            </div>
            
            <div className="pl-6 border-l-2 border-primary/30">
              <h4 className="font-semibold mb-1">Round-Up</h4>
              <p className="text-muted-foreground mb-2">
                Customers round up their cart total to the nearest full amount and donate the difference.
              </p>
              <ul className="space-y-1 ml-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Round to nearest unit (e.g. $19.45 → $20.00)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Round to nearest ten (e.g. $92 → $100)</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-muted/20 border-border">
          <h3 className="text-xl font-semibold mb-3 text-primary">Automated Causes</h3>
          <p className="text-foreground/90">
            Enable automated cause matching. Fandy uses customer location and behavioral data to select the most 
            relevant charity.
          </p>
        </Card>

        <Card className="p-6 bg-muted/20 border-border">
          <h3 className="text-xl font-semibold mb-3 text-primary">Auto Collections</h3>
          <p className="text-foreground/90 mb-4">
            If your store contributes funds directly (e.g. from your margins), auto collections allow you to control 
            how donations are distributed:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-foreground/90">
              <span className="text-primary mt-1">•</span>
              <span>Donate only to selected causes</span>
            </li>
            <li className="flex items-start gap-2 text-foreground/90">
              <span className="text-primary mt-1">•</span>
              <span>Exclude specific causes from automated matching</span>
            </li>
          </ul>
        </Card>
      </div>

      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-12 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-semibold">Store-Funded Campaigns (Upsell with Donations)</h2>
        </div>
        
        <Card className="p-6 bg-card/50 border-border">
          <p className="text-foreground/90 mb-6">
            In store-funded campaigns, your store makes a donation when a customer completes a desired action — 
            typically based on how much they spend.
          </p>
          
          <h3 className="text-xl font-semibold mb-4 text-primary">Configuration Options</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 p-4 rounded-lg bg-muted/30 border border-border">
                <h4 className="font-semibold mb-2">Amount Spent</h4>
                <p className="text-sm text-muted-foreground">
                  The minimum order value that triggers a donation.
                </p>
              </div>
              <div className="flex-1 p-4 rounded-lg bg-muted/30 border border-border">
                <h4 className="font-semibold mb-2">Amount Donated</h4>
                <p className="text-sm text-muted-foreground">
                  The donation value — can be a fixed amount or a percentage of the spend.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
            <h4 className="font-semibold mb-3">Example Variants:</h4>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <span>Spend $20 → Store donates $15</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <span>Spend $50 → Store donates $25</span>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 bg-muted/20 border-border">
          <h3 className="text-xl font-semibold mb-3 text-primary">Cause Controls</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-foreground/90">
              <span className="text-primary mt-1 text-xl">✓</span>
              <span>Enable or disable automated cause matching</span>
            </li>
            <li className="flex items-start gap-3 text-foreground/90">
              <span className="text-primary mt-1 text-xl">✓</span>
              <span>Choose a featured cause to prioritize</span>
            </li>
            <li className="flex items-start gap-3 text-foreground/90">
              <span className="text-primary mt-1 text-xl">✓</span>
              <span>Limit matching to specific organizations or exclude certain ones</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Summary of Campaign Settings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary/30">
                <th className="text-left py-3 px-4 font-semibold">Setting</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              <tr>
                <td className="py-3 px-4 font-medium">Donation Type</td>
                <td className="py-3 px-4 text-foreground/80">Round-up, percentage, fixed, or custom amount</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Who Pays</td>
                <td className="py-3 px-4 text-foreground/80">Customer or Store</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Cause Selection</td>
                <td className="py-3 px-4 text-foreground/80">Automated (via AI), Featured Cause, or Manual Selection</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Distribution Logic</td>
                <td className="py-3 px-4 text-foreground/80">Limit to specific causes or exclude unwanted ones</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Trigger Logic (Upsell)</td>
                <td className="py-3 px-4 text-foreground/80">Define store-funded rules based on customer spend</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
