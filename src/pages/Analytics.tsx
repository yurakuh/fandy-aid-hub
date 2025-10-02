import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Calendar } from "lucide-react";

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
          <BarChart3 className="h-3 w-3" />
          Analytics
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Analytics & Reporting</h1>
        <p className="text-lg text-muted-foreground">
          The Dashboard provides a clear, real-time overview of your campaign performance.
        </p>
      </div>

      <Card className="p-6 bg-card/50 border-border">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Key Metrics Displayed
        </h2>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Donation Orders Amount</h3>
              <p className="text-muted-foreground">
                Total monetary value of donations collected (both customer- and store-funded).
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Donation Orders Count</h3>
              <p className="text-muted-foreground">
                Total number of donation-triggering transactions within the selected date range.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Charities Supported</h3>
              <p className="text-muted-foreground">
                A list of nonprofits that have received donations, including amounts per organization.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Date Filter</h3>
              <p className="text-muted-foreground">
                Adjust the reporting window to analyze custom periods.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 border-border">
        <h2 className="text-2xl font-semibold mb-4">Cost Overview</h2>
        <p className="text-foreground/90 mb-4">
          At the bottom of the dashboard, you'll see a <strong>Total Estimated Cost</strong> block.
        </p>
        
        <div className="space-y-3 mb-6">
          <p className="text-foreground/90">This includes:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2 text-foreground/90">
              <span className="text-primary mt-1">•</span>
              <span>Platform fees (based on your pricing plan and usage)</span>
            </li>
            <li className="flex items-start gap-2 text-foreground/90">
              <span className="text-primary mt-1">•</span>
              <span>Store-funded donation commitments</span>
            </li>
            <li className="flex items-start gap-2 text-foreground/90">
              <span className="text-primary mt-1">•</span>
              <span>Any optional add-ons (e.g. physical donation cards)</span>
            </li>
          </ul>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="text-sm font-medium flex items-start gap-2">
            <span className="text-primary">💡</span>
            <span>
              <strong>Tip:</strong> If your monthly transaction cost exceeds $99, switching to the Pro Plan may reduce your fees.
            </span>
          </p>
        </div>

        <p className="text-muted-foreground text-sm mt-4">
          The cost block updates automatically based on real-time activity.
        </p>
      </Card>
    </div>
  );
}
