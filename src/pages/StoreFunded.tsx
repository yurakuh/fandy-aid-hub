import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StoreFunded() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Badge variant="outline" className="border-primary/30 text-primary">Store-Funded</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Store-Funded Campaigns</h1>
        <p className="text-lg text-muted-foreground">
          Drive sales and build goodwill by making charitable donations on behalf of your customers.
        </p>
      </div>

      <Card className="p-6 bg-card/50 border-border">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-foreground/90 leading-relaxed">
          Store-funded campaigns allow you to make donations based on customer actions—typically when they reach 
          a spending threshold. This approach incentivizes larger purchases while showcasing your brand's commitment 
          to social impact.
        </p>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 bg-muted/20 border-border">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <h3 className="font-semibold mb-2">Set Trigger</h3>
            <p className="text-sm text-muted-foreground">
              Define minimum spend amount that triggers your store's donation.
            </p>
          </Card>
          
          <Card className="p-5 bg-muted/20 border-border">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <h3 className="font-semibold mb-2">Customer Reaches Goal</h3>
            <p className="text-sm text-muted-foreground">
              Customer meets or exceeds the spending threshold during checkout.
            </p>
          </Card>
          
          <Card className="p-5 bg-muted/20 border-border">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <h3 className="font-semibold mb-2">Store Donates</h3>
            <p className="text-sm text-muted-foreground">
              Your store automatically donates the configured amount to the cause.
            </p>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Configuration Options</h2>
        
        <Card className="p-6 bg-card/50 border-border">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Amount Spent</h3>
              <p className="text-foreground/90 mb-4">
                Set the minimum order value that triggers a donation from your store.
              </p>
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm font-medium mb-2">Example:</p>
                <p className="text-sm text-muted-foreground">
                  Minimum spend: $50
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Amount Donated</h3>
              <p className="text-foreground/90 mb-4">
                Define how much your store will donate when the trigger is met.
              </p>
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm font-medium mb-2">Options:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fixed amount ($5, $10, $20)</li>
                  <li>• Percentage of spend (5%, 10%)</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Setting Up Multiple Tiers</h2>
        
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <p className="text-foreground/90 mb-6">
            Create multiple donation tiers to incentivize higher spending. Customers see how close they are 
            to unlocking the next donation level.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-primary/30">
              <div className="flex-shrink-0 w-24 font-semibold text-primary">Spend $20</div>
              <div className="text-muted-foreground">→</div>
              <div className="flex-1">Store donates <span className="font-semibold text-foreground">$5</span></div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-primary/30">
              <div className="flex-shrink-0 w-24 font-semibold text-primary">Spend $50</div>
              <div className="text-muted-foreground">→</div>
              <div className="flex-1">Store donates <span className="font-semibold text-foreground">$15</span></div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-primary/30">
              <div className="flex-shrink-0 w-24 font-semibold text-primary">Spend $100</div>
              <div className="text-muted-foreground">→</div>
              <div className="flex-1">Store donates <span className="font-semibold text-foreground">$30</span></div>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Cause Controls</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-card/50 border-border">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="text-primary text-xl">◆</span> Automated Matching
            </h3>
            <p className="text-sm text-muted-foreground">
              Enable AI-powered cause matching to automatically select charities relevant to each customer's 
              location and preferences.
            </p>
          </Card>
          
          <Card className="p-5 bg-card/50 border-border">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="text-primary text-xl">◆</span> Featured Cause
            </h3>
            <p className="text-sm text-muted-foreground">
              Prioritize a specific cause or charity that aligns with your brand values and mission.
            </p>
          </Card>
          
          <Card className="p-5 bg-card/50 border-border">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="text-primary text-xl">◆</span> Limit to Specific Causes
            </h3>
            <p className="text-sm text-muted-foreground">
              Restrict donations to a curated list of organizations that you've vetted and trust.
            </p>
          </Card>
          
          <Card className="p-5 bg-card/50 border-border">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="text-primary text-xl">◆</span> Exclude Organizations
            </h3>
            <p className="text-sm text-muted-foreground">
              Prevent donations from going to specific causes or categories that don't align with your values.
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-muted/20 border-border">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Store-Funded Campaigns</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl mt-0.5">✓</span>
            <div>
              <p className="font-medium mb-1">Increase Average Order Value</p>
              <p className="text-sm text-muted-foreground">
                Customers are motivated to reach spending thresholds to unlock donations.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl mt-0.5">✓</span>
            <div>
              <p className="font-medium mb-1">Build Brand Loyalty</p>
              <p className="text-sm text-muted-foreground">
                Show customers your commitment to social impact without asking them to pay more.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl mt-0.5">✓</span>
            <div>
              <p className="font-medium mb-1">Differentiate Your Brand</p>
              <p className="text-sm text-muted-foreground">
                Stand out from competitors by integrating purpose into your business model.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl mt-0.5">✓</span>
            <div>
              <p className="font-medium mb-1">Tax Benefits</p>
              <p className="text-sm text-muted-foreground">
                Store-funded donations may qualify as tax-deductible charitable contributions.
              </p>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  );
}
