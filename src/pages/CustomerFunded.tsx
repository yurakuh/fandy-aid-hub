import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CustomerFunded() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Badge variant="outline" className="border-primary/30 text-primary">Customer-Funded</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Customer-Funded Campaigns</h1>
        <p className="text-lg text-muted-foreground">
          Empower your customers to make a difference at checkout with flexible donation options.
        </p>
      </div>

      <Card className="p-6 bg-card/50 border-border">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-foreground/90 leading-relaxed">
          Customer-funded campaigns allow shoppers to add a donation to their order at checkout. This increases 
          engagement, builds brand loyalty, and gives customers a sense of purpose with their purchase.
        </p>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 bg-muted/20 border-border">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <h3 className="font-semibold mb-2">Customer Shops</h3>
            <p className="text-sm text-muted-foreground">
              Customer adds items to cart and proceeds to checkout.
            </p>
          </Card>
          
          <Card className="p-5 bg-muted/20 border-border">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <h3 className="font-semibold mb-2">Donation Prompt</h3>
            <p className="text-sm text-muted-foreground">
              Fandy displays donation options based on your campaign settings.
            </p>
          </Card>
          
          <Card className="p-5 bg-muted/20 border-border">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <h3 className="font-semibold mb-2">Impact Made</h3>
            <p className="text-sm text-muted-foreground">
              Customer completes purchase, and donation goes to selected cause.
            </p>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Donation Logic Options</h2>
        
        <Card className="p-6 bg-card/50 border-border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-primary">●</span> Custom Amount
          </h3>
          <p className="text-foreground/90 mb-4">
            Let customers enter any donation amount they choose. This provides maximum flexibility and can lead 
            to higher donation values from engaged customers.
          </p>
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm font-medium mb-2">Best for:</p>
            <p className="text-sm text-muted-foreground">
              Stores with highly engaged audiences who want full control over their contribution.
            </p>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 border-border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-primary">●</span> Fixed Amounts
          </h3>
          <p className="text-foreground/90 mb-4">
            Provide 3-5 preset donation amounts as quick-click buttons. This simplifies the decision process 
            and can increase conversion rates.
          </p>
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm font-medium mb-2">Example Setup:</p>
            <div className="flex gap-2 mt-2">
              {["$1", "$5", "$10", "$25"].map((amount) => (
                <div key={amount} className="px-4 py-2 bg-background border border-primary/30 rounded-md text-sm font-medium">
                  {amount}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 border-border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-primary">●</span> Percentage of Order
          </h3>
          <p className="text-foreground/90 mb-4">
            Customers donate a percentage of their cart total (e.g., 5% or 10%). The donation automatically 
            scales with order size.
          </p>
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm font-medium mb-2">Example:</p>
            <p className="text-sm text-muted-foreground">
              Cart total: $100 → 5% donation = $5 added to order
            </p>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 border-border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-primary">●</span> Round-Up
          </h3>
          <p className="text-foreground/90 mb-4">
            Customers round their cart total up to the nearest dollar or ten dollars, with the difference going 
            to charity. This is a low-friction, psychologically easy option.
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm font-medium mb-1">Round to Nearest Unit</p>
              <p className="text-sm text-muted-foreground">$19.45 → $20.00 (Donate $0.55)</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm font-medium mb-1">Round to Nearest Ten</p>
              <p className="text-sm text-muted-foreground">$92.00 → $100.00 (Donate $8.00)</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Pro Tips</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl mt-0.5">✓</span>
            <div>
              <p className="font-medium mb-1">Test Different Options</p>
              <p className="text-sm text-muted-foreground">
                Try various donation logic types to see which resonates best with your audience.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl mt-0.5">✓</span>
            <div>
              <p className="font-medium mb-1">Use Social Proof</p>
              <p className="text-sm text-muted-foreground">
                Display how many customers have donated or total impact achieved.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl mt-0.5">✓</span>
            <div>
              <p className="font-medium mb-1">Enable Automated Cause Matching</p>
              <p className="text-sm text-muted-foreground">
                Let Fandy's AI select causes relevant to each customer's location and interests.
              </p>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  );
}
