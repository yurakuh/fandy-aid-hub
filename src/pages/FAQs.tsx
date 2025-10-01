import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function FAQs() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
          Common Questions
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground">
          Find answers to common questions about using Fandy for your Shopify store.
        </p>
      </div>

      <Card className="p-6 bg-card/50 border-border">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              How does Fandy integrate with my Shopify checkout?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              Fandy seamlessly integrates with Shopify's checkout process. Once installed, it adds a donation prompt 
              at checkout based on your campaign configuration. The integration is fully automated and requires no 
              coding or technical knowledge.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              Can I run both customer-funded and store-funded campaigns simultaneously?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              Yes! You can run multiple campaigns at the same time. For example, you could have a customer-funded 
              round-up campaign active alongside a store-funded campaign that triggers when customers spend over $50. 
              The app intelligently manages both types of campaigns.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              How are the charitable organizations selected?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              Fandy offers three main options: (1) Automated matching uses AI to select causes based on customer 
              location and preferences, (2) You can choose a featured cause that aligns with your brand, or (3) You 
              can curate a custom list of approved organizations. You have full control over cause selection.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              What fees does Fandy charge?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              Fandy operates on a subscription model with different tiers based on your store's order volume. 
              We also take a small percentage of each donation to cover platform costs and ensure charities receive 
              their funds securely. Contact our sales team for detailed pricing information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              How do I know the donations are actually going to charities?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              Transparency is crucial to us. Fandy provides detailed reporting in your dashboard showing exactly 
              where donations went, when they were sent, and which causes received funds. We work only with verified 
              charitable organizations and provide receipts for all transactions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              Can customers opt-out of donating?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              Absolutely. For customer-funded campaigns, donation is always optional. Customers can simply skip 
              the donation prompt or select "No thanks" to proceed with their purchase without contributing. For 
              store-funded campaigns, the donation is made by your store, not the customer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              Does Fandy work with Shopify Plus?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              Yes, Fandy is fully compatible with both standard Shopify stores and Shopify Plus. Shopify Plus 
              merchants may have access to additional customization options and white-label features.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              How does round-up donation work technically?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              When a customer opts for round-up, Fandy calculates the difference between their cart total and the 
              nearest dollar (or ten dollars, depending on your settings). That difference becomes the donation amount 
              and is added to their order. For example, $19.45 rounds up to $20.00, so $0.55 is donated.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              Can I customize the donation prompt appearance?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              Yes! Fandy allows you to customize text, colors, images, and positioning of the donation prompt to 
              match your store's branding. You can preview changes in real-time before publishing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              What happens if a customer requests a refund?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              If a customer returns an order that included a donation, the donation portion can be refunded along 
              with the product price. Fandy automatically handles this in the refund process. However, many stores 
              choose to keep donations non-refundable as a policy decision.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              How do I track campaign performance?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              The Fandy dashboard provides comprehensive analytics including total donations collected, average 
              donation amounts, participation rates, impact metrics, and cause distribution. You can filter by 
              date range, campaign type, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12" className="border-b border-border pb-4">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              Is there a minimum donation amount?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2">
              You can set minimum and maximum donation amounts in your campaign configuration. Most stores set a 
              minimum of $0.25 to $1.00 to ensure donations are meaningful while remaining accessible to all customers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <h2 className="text-xl font-semibold mb-3">Still have questions?</h2>
        <p className="text-foreground/90 mb-4">
          Can't find what you're looking for? Our support team is ready to help!
        </p>
        <a 
          href="/contact" 
          className="text-primary hover:underline font-medium"
        >
          Contact Support →
        </a>
      </Card>
    </div>
  );
}
