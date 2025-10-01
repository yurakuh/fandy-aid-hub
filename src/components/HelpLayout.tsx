import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Book, DollarSign, Store, Rocket, HelpCircle, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HelpLayoutProps {
  children: ReactNode;
}

const navItems = [
  { title: "Understanding Campaigns", url: "/", icon: Book },
  { title: "Customer-Funded Campaigns", url: "/customer-funded", icon: DollarSign },
  { title: "Store-Funded Campaigns", url: "/store-funded", icon: Store },
  { title: "Getting Started", url: "/getting-started", icon: Rocket },
  { title: "FAQs", url: "/faqs", icon: HelpCircle },
  { title: "Contact Support", url: "/contact", icon: Mail },
];

export function HelpLayout({ children }: HelpLayoutProps) {
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
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md ml-8">
            <Search className="h-4 w-4 text-muted-foreground absolute ml-3" />
            <Input 
              placeholder="Search documentation..." 
              className="pl-9 bg-muted/50 border-border"
            />
          </div>
          <div className="flex gap-2">
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
