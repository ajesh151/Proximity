
import { Navbar } from "@/components/layout/Navbar";
import { OrganizationProfile } from "@/components/profile/OrganizationProfile";

const Profile = () => {
  // Mock organization data (in a real app this would come from an API based on URL params)
  const organization = {
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
    isFollowing: false,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      <OrganizationProfile organization={organization} />
    </div>
  );
};

export default Profile;
