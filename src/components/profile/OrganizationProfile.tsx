
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FollowButton } from "@/components/ui/FollowButton";

interface OrganizationProfileProps {
  organization?: {
    id: string;
    name: string;
    logo: string;
    coverImage?: string;
    bio: string;
    industry: string;
    location: string;
    website: string;
    followers: number;
    following: number;
    isFollowing?: boolean;
  };
  isOwner?: boolean;
}

export const OrganizationProfile = ({ 
  organization = {
    id: "1",
    name: "Acme Corporation",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=250&h=250&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&fit=crop",
    bio: "Leading provider of innovative business solutions for enterprise organizations. Specializing in cloud infrastructure, SaaS, and digital transformation.",
    industry: "Technology",
    location: "San Francisco, CA",
    website: "https://acme.example.com",
    followers: 1482,
    following: 57,
  },
  isOwner = false,
}: OrganizationProfileProps) => {
  return (
    <div className="w-full space-y-6">
      {/* Cover Image */}
      <div 
        className="w-full h-48 bg-cover bg-center rounded-lg"
        style={{ 
          backgroundImage: organization.coverImage 
            ? `url(${organization.coverImage})` 
            : "linear-gradient(to right, #4b74fd, #2944e0)"
        }}
      />
      
      {/* Profile Info */}
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16 md:-mt-20">
          {/* Logo/Avatar */}
          <div className="rounded-lg border-4 border-background overflow-hidden">
            <img 
              src={organization.logo} 
              alt={organization.name}
              className="w-24 h-24 md:w-32 md:h-32 object-cover"
            />
          </div>
          
          {/* Name and Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between flex-1 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{organization.name}</h1>
              <p className="text-muted-foreground">
                {organization.industry} • {organization.location}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {isOwner ? (
                <Button variant="outline" className="font-medium">
                  Edit Profile
                </Button>
              ) : (
                <FollowButton organizationId={organization.id} initialFollowed={organization.isFollowing} />
              )}
            </div>
          </div>
        </div>
        
        {/* Bio and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold mb-2">About</h2>
                <p>{organization.bio}</p>
                
                {/* Additional details */}
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <div className="mr-6">
                    <span className="font-medium text-foreground">{organization.followers}</span> followers
                  </div>
                  <div className="mr-6">
                    <span className="font-medium text-foreground">{organization.following}</span> following
                  </div>
                  <a 
                    href={organization.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-proximity-500 hover:underline"
                  >
                    {organization.website}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="container px-4">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid grid-cols-3 md:w-[400px]">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="products">Products & Services</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-6">
            <div className="text-center py-12 text-muted-foreground">
              <p>No posts available yet</p>
            </div>
          </TabsContent>
          <TabsContent value="products" className="mt-6">
            <div className="text-center py-12 text-muted-foreground">
              <p>No products or services listed yet</p>
            </div>
          </TabsContent>
          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Industry</h3>
                  <p>{organization.industry}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p>{organization.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Website</h3>
                  <a 
                    href={organization.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-proximity-500 hover:underline"
                  >
                    {organization.website}
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

import { Button } from "@/components/ui/button";
