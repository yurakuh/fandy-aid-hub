import { Info, CheckCircle2, BarChart3, Globe, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Introduction() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Introduction to Fandy
        </h1>
        <p className="text-lg text-muted-foreground">
          Fandy is a checkout charity platform designed specifically for Shopify stores. It allows merchants to add donation features directly into the customer journey, turning everyday purchases into meaningful contributions.
        </p>
      </div>

      <Card className="border-primary/20 bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            What Makes Fandy Different?
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p>
            Unlike traditional donation plugins, Fandy focuses on <strong>automated campaign creation</strong>, <strong>donor matching and reporting</strong>, and <strong>local impact</strong>. This creates a personalized and transparent experience for both shoppers and merchants.
          </p>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Capabilities</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Seamless Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Add donation prompts directly into product or cart pages without disrupting the shopping experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Globe className="h-5 w-5 text-primary" />
                Smart Matching
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Automatically match customers with relevant local charities based on their location and interests.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5 text-primary" />
                Automated Reporting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Generate comprehensive reports for donors and brands, tracking impact and engagement metrics.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-primary" />
                Flexible Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Configure campaigns funded by either the customer or the store, with multiple donation models.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-primary" />
                Seasonal Marketing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access seasonal marketing kits and built-in tools to support campaign visibility throughout the year.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-accent/30 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardContent className="pt-6">
          <p className="text-lg text-center text-foreground">
            Fandy is built to help brands align with social causes in a <strong>structured</strong>, <strong>measurable</strong>, and <strong>low-friction</strong> way — making impact marketing part of the core shopping experience.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
