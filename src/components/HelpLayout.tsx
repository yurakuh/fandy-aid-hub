import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import { Book, DollarSign, Store, Rocket, CircleHelp as HelpCircle, Mail, Info, Puzzle, Sparkles, BarChart3, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface HelpLayoutProps {
  children: ReactNode;
}

const navItems = [
  { title: "Introduction", url: "/", icon: Info },
  { title: "Understanding Campaigns", url: "/understanding-campaigns", icon: Book },
  { title: "Customer-Funded Campaigns", url: "/customer-funded", icon: DollarSign },
  { title: "Store-Funded Campaigns", url: "/store-funded", icon: Store },
  { title: "Getting Started", url: "/getting-started", icon: Rocket },
  { title: "App Blocks & Embeds", url: "/app-blocks-embeds", icon: Puzzle },
  { title: "Impact Automation", url: "/impact-automation", icon: Sparkles },
  { title: "Analytics & Reporting", url: "/analytics", icon: BarChart3 },
  { title: "FAQs", url: "/faqs", icon: HelpCircle },
  { title: "Contact Support", url: "/contact", icon: Mail },
];

export function HelpLayout({ children }: HelpLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold">
              <span className="text-foreground">FAN</span>
              <span className="text-primary">DY</span>
            </div>
            <span className="text-sm text-muted-foreground border-l border-border pl-3">Help Center</span>
          </div>
          <div className="flex items-center gap-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 space-y-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.url}
                      to={item.url}
                      end
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-foreground/80 hover:bg-muted hover:text-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Button variant="outline" size="sm" asChild>
              <a href="https://cc.fandy.me" target="_blank" rel="noopener noreferrer">
                Main Site
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-card/30 hidden lg:block">
          <nav className="sticky top-20 p-4 space-y-1">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
              Documentation
            </div>
            {navItems.map((item) => (
              <NavLink
                key={item.url}
                to={item.url}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-foreground/80 hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container max-w-4xl mx-auto px-4 py-8 lg:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
