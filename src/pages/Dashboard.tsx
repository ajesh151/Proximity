
import { Navbar } from "@/components/layout/Navbar";
import { NewsFeed } from "@/components/feed/NewsFeed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Search, Bell } from "lucide-react";

const Dashboard = () => {
  // Mock data for current user
  const currentUser = {
    id: "user1",
    organizationName: "Acme Corporation",
    organizationLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=250&h=250&fit=crop",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <main className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left sidebar */}
          <div className="hidden md:block">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={currentUser.organizationLogo} 
                      alt={currentUser.organizationName}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{currentUser.organizationName}</h3>
                      <p className="text-sm text-muted-foreground">View profile</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Industry Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium">Technology</h4>
                    <p className="text-sm text-muted-foreground">1,245 organizations</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Manufacturing</h4>
                    <p className="text-sm text-muted-foreground">843 organizations</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Healthcare</h4>
                    <p className="text-sm text-muted-foreground">692 organizations</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Main feed */}
          <div className="md:col-span-2">
            <Tabs defaultValue="feed" className="mb-6">
              <TabsList>
                <TabsTrigger value="feed">Feed</TabsTrigger>
                <TabsTrigger value="discover">Discover</TabsTrigger>
                <TabsTrigger value="industry">Industry</TabsTrigger>
              </TabsList>
              <TabsContent value="feed">
                <NewsFeed currentUser={currentUser} />
              </TabsContent>
              <TabsContent value="discover">
                <Card className="p-8 text-center">
                  <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Discover Organizations</h3>
                  <p className="text-muted-foreground">
                    Find and connect with businesses in your industry
                  </p>
                </Card>
              </TabsContent>
              <TabsContent value="industry">
                <Card className="p-8 text-center">
                  <UserPlus className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Industry News</h3>
                  <p className="text-muted-foreground">
                    Stay updated with the latest trends in your industry
                  </p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
