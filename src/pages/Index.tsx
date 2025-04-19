
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Briefcase, CheckCircle, Users, Search, Video, Share, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-proximity-700 to-proximity-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="border-white/30 text-proximity-100 px-3 py-1">
                Business Connections That Matter
              </Badge>
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
      
      {/* Pitch Hub Highlight */}
      <section className="py-20 px-4 bg-proximity-50 dark:bg-proximity-900/40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <Badge>Featured Pitch</Badge>
                  <div className="text-sm text-muted-foreground">Seed Round • $500,000</div>
                </div>
                <h3 className="text-xl font-bold mb-2">EcoTrack: Sustainable Supply Chain Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Helping businesses track and optimize their environmental impact through advanced supply chain analytics
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">SaaS</Badge>
                  <Badge variant="outline">Sustainability</Badge>
                  <Badge variant="outline">Supply Chain</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Video className="h-4 w-4 mr-1" /> Pitch Video
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" /> 24 Interested
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View Pitch</Button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                <Badge variant="secondary">Introducing</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Pitch Hub</h2>
                <p className="text-xl text-muted-foreground">
                  A Shark Tank-style platform where startups pitch directly to enterprises and investors
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Create compelling video pitches and upload pitch decks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Get noticed by relevant enterprises and investors in your industry</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Schedule virtual meetings and attend live pitch events</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild size="lg" className="bg-proximity-700 hover:bg-proximity-800">
                    <Link to="/auth?signup=true">Start Pitching</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* User Roles */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for Different Business Roles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proximity offers tailored experiences for startups, enterprises, and investors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-proximity-100 dark:bg-proximity-900 text-proximity-700 dark:text-proximity-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Startups & Small Businesses</h3>
                <p className="text-muted-foreground mb-4">
                  Share products, submit pitches, gain visibility, and connect with potential partners and investors.
                </p>
                <ul className="text-sm text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Create multimedia pitches</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Track engagement analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Get AI pitch feedback</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-proximity-100 dark:bg-proximity-900 text-proximity-700 dark:text-proximity-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Enterprises & Large Organizations</h3>
                <p className="text-muted-foreground mb-4">
                  Discover innovative solutions, find strategic partners, and identify acquisition targets.
                </p>
                <ul className="text-sm text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Browse curated pitch selections</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Host pitch competitions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Build strategic partnerships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-proximity-100 dark:bg-proximity-900 text-proximity-700 dark:text-proximity-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Investors & Mentors</h3>
                <p className="text-muted-foreground mb-4">
                  Access a dealflow pipeline of verified businesses with detailed pitch materials and metrics.
                </p>
                <ul className="text-sm text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Get AI-matched pitch recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Manage dealflow pipeline</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Schedule follow-ups with founders</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Platform Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proximity offers a comprehensive suite of tools designed specifically for B2B connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <CheckCircle className="h-10 w-10 text-proximity-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">Verified Business Profiles</h3>
              <p className="text-muted-foreground">
                Every account is manually verified to ensure only legitimate businesses participate.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <MessageSquare className="h-10 w-10 text-proximity-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">Integrated Communications</h3>
              <p className="text-muted-foreground">
                Direct messaging, comment threads, and video call scheduling all in one platform.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <Search className="h-10 w-10 text-proximity-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">Advanced Search & Filtering</h3>
              <p className="text-muted-foreground">
                Find exactly the businesses you're looking for with our robust filtering system.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <Video className="h-10 w-10 text-proximity-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">Live Pitch Events</h3>
              <p className="text-muted-foreground">
                Virtual pitch sessions with Q&A for startups to present to multiple investors.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-10 w-10 text-proximity-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">Performance Analytics</h3>
              <p className="text-muted-foreground">
                Comprehensive metrics on profile views, pitch performance, and engagement.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <Share className="h-10 w-10 text-proximity-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">Integration Ecosystem</h3>
              <p className="text-muted-foreground">
                Connect with your favorite tools including LinkedIn, Calendly, and CRM systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-proximity-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to join the network?</h2>
          <p className="text-proximity-100 mb-8 max-w-2xl mx-auto">
            Create your business profile today and start building valuable connections with verified organizations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-proximity-900 hover:bg-gray-100">
              <Link to="/auth?signup=true">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/pitches">Explore Pitch Hub</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-proximity-700 dark:text-proximity-400 mb-2">Proximity</h2>
              <p className="text-muted-foreground">The B2B social platform for verified businesses</p>
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

import { Building2, User } from "lucide-react";
