import { Sparkles, MapPin, Heart, FileText, Calendar, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ImpactAutomation() {
  return (
    <div className="space-y-8">
      <div>
        <h1 id="impact-automation-tools" className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Impact Automation Tools
        </h1>
        <p className="text-lg text-muted-foreground">
          Fandy provides automation tools that personalize the donation experience for each customer, helping to increase conversion, loyalty, and repeat engagement.
        </p>
      </div>

      <Alert className="border-primary/30 bg-primary/5">
        <Sparkles className="h-4 w-4" />
        <AlertDescription>
          Below are the automation features you can toggle on or off from the <strong>Settings</strong> section of the app.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <div>
          <h2 id="automation-settings" className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <Settings className="h-6 w-6 text-primary" />
            Automation Settings
          </h2>
          <p className="text-muted-foreground mb-6">
            Configure how Fandy personalizes and automates the donation experience for your customers.
          </p>
        </div>

        <div>
          <h3 id="match-by-geography" className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <MapPin className="h-6 w-6 text-primary" />
            Match by Geography
          </h3>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                When enabled, Fandy will show each shopper charitable causes that are relevant to their geographic location (e.g. city, region, country).
              </p>

              <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Why this matters:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Creates a more personal connection between the customer and the cause</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Encourages higher donation intent through local relevance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Increases emotional resonance and often improves conversion</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 id="match-by-preferences" className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <Heart className="h-6 w-6 text-primary" />
            Match by Preferences
          </h3>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                This feature uses Fandy's AI engine to recommend charities based on customer interests and behaviors such as products viewed, categories browsed, or previous donation patterns.
              </p>

              <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                <h4 className="font-semibold text-foreground mb-3 text-sm">Example:</h4>
                <p className="text-sm text-muted-foreground">
                  Someone who shops for pet products may be matched with animal welfare causes.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Benefits:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Contextual targeting helps build trust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Increases the likelihood of contribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Creates a more personalized shopping experience</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 id="donor-reports" className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <FileText className="h-6 w-6 text-primary" />
            Donor Reports
          </h3>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                With this setting enabled, donors receive automated follow-up updates after their purchase.
              </p>

              <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Reports include:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Information on how their donation was used</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Campaign progress updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Impact stories</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Impact:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Keeps donors engaged with your brand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Encourages repeat giving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Improves brand perception as transparent and impact-driven</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 id="match-by-holidays" className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <Calendar className="h-6 w-6 text-primary" />
            Match by Holidays
          </h3>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                This setting allows you to automatically launch themed campaigns tied to key calendar events such as Earth Day, Giving Tuesday, or Breast Cancer Awareness Month.
              </p>

              <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                <h4 className="font-semibold text-foreground mb-2 text-sm">How it works:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pre-select which holidays to include</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fandy will activate matching campaigns during those periods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Campaigns automatically align with global movements</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Popular holidays:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-accent">•</span>
                    <span>Earth Day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">•</span>
                    <span>Giving Tuesday</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">•</span>
                    <span>Breast Cancer Awareness Month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">•</span>
                    <span>World Mental Health Day</span>
                  </div>
                </div>
              </div>

              <Alert className="border-muted bg-muted/30">
                <AlertDescription>
                  <strong>Pro tip:</strong> This is a simple way to align your brand with global movements and boost engagement during high-intent moments.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
