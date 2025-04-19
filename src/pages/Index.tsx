
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-proximity-700 to-proximity-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Connect with verified businesses on Proximity
              </h1>
              <p className="text-lg text-proximity-100 max-w-lg">
                The professional social network exclusively for verified businesses and organizations. Build partnerships, share updates, and grow your network.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-proximity-900 hover:bg-gray-100">
                  <Link to="/auth?signup=true">Create Business Account</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/auth">Sign In</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop" 
                alt="Business professionals" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for Business Connections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proximity offers a professional platform for businesses to connect, share insights, and explore opportunities together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-proximity-100 dark:bg-proximity-900 text-proximity-700 dark:text-proximity-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Verified Businesses Only</h3>
                <p className="text-muted-foreground">
                  Connect with legitimate organizations through our thorough verification process.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-proximity-100 dark:bg-proximity-900 text-proximity-700 dark:text-proximity-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Industry Focused</h3>
                <p className="text-muted-foreground">
                  Find and connect with businesses in your sector for relevant partnerships.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-proximity-100 dark:bg-proximity-900 text-proximity-700 dark:text-proximity-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Discover Opportunities</h3>
                <p className="text-muted-foreground">
                  Find partners, suppliers, and clients that match your business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-proximity-50 dark:bg-proximity-900 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to join the network?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create your business profile today and start building valuable connections with verified organizations.
          </p>
          <Button asChild size="lg" className="bg-proximity-700 hover:bg-proximity-800">
            <Link to="/auth?signup=true">Get Started</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-proximity-700 dark:text-proximity-400 mb-2">Proximity</h2>
              <p className="text-muted-foreground">The B2B social platform</p>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-sm text-muted-foreground">© 2025 Proximity. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
