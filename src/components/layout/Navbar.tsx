
import { Link } from "react-router-dom";
import { Bell, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useLocation } from "react-router-dom";

export const Navbar = ({ isAuthenticated = false }) => {
  const location = useLocation();

  // Don't show navbar on auth pages
  if (location.pathname === "/auth") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-proximity-700 dark:text-proximity-400">
              Proximity
            </span>
          </Link>
        </div>

        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell size={20} />
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" aria-label="Settings">
              <Settings size={20} />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline">
              <Link to="/auth">Log In</Link>
            </Button>
            <Button asChild>
              <Link to="/auth?signup=true">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
