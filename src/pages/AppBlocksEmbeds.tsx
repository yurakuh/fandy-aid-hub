import { Puzzle, MousePointer, Settings, CircleCheck as CheckCircle2, TriangleAlert as AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AppBlocksEmbeds() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Using App Blocks & App Embeds
        </h1>
        <p className="text-lg text-muted-foreground">
          Fandy uses App Blocks and App Embeds to display donation-related widgets on your storefront. This integration is compatible with all Shopify Online Store 2.0 themes.
        </p>
      </div>

      <Alert className="border-primary/30 bg-primary/5">
        <Puzzle className="h-4 w-4" />
        <AlertDescription>
          There are two ways to place donation widgets in your store: using the Shopify Theme Editor for manual placement, or using Fandy's built-in automatic placement settings.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
            Manual Placement (Theme Editor)
          </h2>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                You can manually add donation widgets via the Shopify theme editor.
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <MousePointer className="h-4 w-4 text-primary" />
                  Steps:
                </h3>
                <ol className="space-y-3 ml-6 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0 mt-0.5">1</span>
                    <span>Go to <code className="px-2 py-1 bg-muted rounded text-sm">Online Store → Themes → Customize</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0 mt-0.5">2</span>
                    <span>Choose a template (e.g. Product page)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0 mt-0.5">3</span>
                    <span>In the left panel, click <strong>Add block</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0 mt-0.5">4</span>
                    <span>Scroll to <strong>Apps</strong> → Select the relevant Fandy block</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0 mt-0.5">5</span>
                    <span>Drag and position the widget as needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex-shrink-0 mt-0.5">6</span>
                    <span>Click <strong>Save</strong></span>
                  </li>
                </ol>
              </div>

              <Alert className="border-accent/30 bg-accent/5">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Make sure the App Embed is enabled for Fandy. You'll see a puzzle icon (<strong>App embeds</strong>) at the bottom-left corner of the editor.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
            Automatic Placement (via Fandy Admin)
          </h2>
          <Card className="border-border/50 bg-card/30">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                Alternatively, you can configure widget placement inside the Fandy app — no theme editing required.
              </p>

              <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                <p className="text-sm text-muted-foreground mb-3">
                  Once you set up your campaign, you'll be asked to define <strong>Widget Placement</strong>:
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Placement options:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Customer-funded widgets</strong> (Fixed amounts, percent, round-up)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Store-funded widgets</strong> (Upsell with donations)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-sm">For each type, you can:</h4>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 rounded-lg border border-border/50 bg-background/50">
                    <h5 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Use Theme Section
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Control placement manually via Shopify Theme Editor
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-border/50 bg-background/50">
                    <h5 className="font-semibold text-accent mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Automatic Placement
                    </h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      Let Fandy place widgets automatically
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-medium text-foreground text-sm">When choosing Automatic Placement, target:</h5>

                  <div className="space-y-3 ml-4">
                    <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                      <p className="font-semibold text-sm text-foreground mb-2">Product Page</p>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Recommended:</strong> Place widget below the "Add to Cart" button</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Optional:</strong> Use a custom CSS selector for precise targeting</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                      <p className="font-semibold text-sm text-foreground mb-2">Cart Page</p>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                          <span>Same logic applies as on product page</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Alert className="border-muted bg-muted/30">
                  <AlertDescription>
                    You can also choose <strong>"Do not show widget"</strong> if you want to keep donation activity invisible to customers.
                  </AlertDescription>
                </Alert>

                <Alert className="border-accent/30 bg-accent/5">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Note:</strong> For widgets to display, Fandy App Widgets must be enabled in your theme via app embeds. The app will prompt you if this is not active.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Best Practice Recommendations
          </h2>
          <Card className="border-accent/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-6 space-y-3">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Use automatic placement for quick launch</p>
                    <p className="text-sm text-muted-foreground">Ideal for most stores</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Use manual theme editor blocks for full visual control</p>
                    <p className="text-sm text-muted-foreground">Best when you need precise positioning</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Place donation prompts strategically:</p>
                    <ul className="text-sm text-muted-foreground mt-1 ml-4 space-y-1">
                      <li>• Just below the "Add to Cart" button (product page)</li>
                      <li>• Inside or near the cart summary (cart page)</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
