import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
          <Mail className="h-3 w-3" />
          Get in Touch
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Contact Support</h1>
        <p className="text-lg text-muted-foreground">
          Have a question or need help? We're here to assist you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-5 bg-card/50 border-border text-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Email Support</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Get help via email within 24 hours
          </p>
          <a href="mailto:support@fandy.me" className="text-primary hover:underline text-sm font-medium">
            support@fandy.me
          </a>
        </Card>

        <Card className="p-5 bg-card/50 border-border text-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Book a Demo</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Schedule a personalized walkthrough
          </p>
          <Button variant="outline" size="sm" asChild>
            <a href="https://calendly.com/yurakuh" target="_blank" rel="noopener noreferrer">
              Schedule Call
            </a>
          </Button>
        </Card>

        <Card className="p-5 bg-card/50 border-border text-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Live Chat</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Chat with us in the Fandy app
          </p>
          <span className="text-sm text-muted-foreground">Available in dashboard</span>
        </Card>
      </div>

      <Card className="p-8 bg-card/50 border-border">
        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input 
                id="name" 
                placeholder="Your name" 
                className="bg-background border-border"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                className="bg-background border-border"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="store">Shopify Store URL</Label>
            <Input 
              id="store" 
              placeholder="yourstore.myshopify.com" 
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input 
              id="subject" 
              placeholder="How can we help?" 
              className="bg-background border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea 
              id="message" 
              placeholder="Describe your question or issue in detail..." 
              className="bg-background border-border min-h-32"
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full md:w-auto">
            Send Message
          </Button>
        </form>
      </Card>

      <Card className="p-6 bg-muted/20 border-border">
        <h2 className="text-xl font-semibold mb-3">Before Contacting Support</h2>
        <p className="text-foreground/90 mb-4">
          To help us assist you faster, please:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-foreground/90">
            <span className="text-primary mt-1">•</span>
            <span>Check our documentation and FAQs first</span>
          </li>
          <li className="flex items-start gap-2 text-foreground/90">
            <span className="text-primary mt-1">•</span>
            <span>Include your store URL and campaign details</span>
          </li>
          <li className="flex items-start gap-2 text-foreground/90">
            <span className="text-primary mt-1">•</span>
            <span>Provide screenshots or error messages if applicable</span>
          </li>
          <li className="flex items-start gap-2 text-foreground/90">
            <span className="text-primary mt-1">•</span>
            <span>Describe what you've already tried to resolve the issue</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
