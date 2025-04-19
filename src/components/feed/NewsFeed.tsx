
import { PostCreator } from "./PostCreator";
import { Post } from "./Post";
import { Card } from "@/components/ui/card";

// Mock data for initial posts
const SAMPLE_POSTS = [
  {
    id: "1",
    content: "We're excited to announce our new cloud platform for enterprise customers. Faster deployment, better security, and improved analytics.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    likes: 24,
    comments: 5,
    organization: {
      id: "org1",
      name: "Tech Innovations Inc.",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=250&h=250&fit=crop",
    },
  },
  {
    id: "2",
    content: "Attending the B2B Tech Expo next week. Looking forward to connecting with industry leaders and showcasing our latest solutions. Stop by booth #234 to say hello!",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    likes: 15,
    comments: 3,
    organization: {
      id: "org2",
      name: "Global Solutions",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=250&h=250&fit=crop",
    },
  },
  {
    id: "3",
    content: "Proud to announce our new partnership with Acme Corporation! Together we'll be developing next-generation supply chain solutions for manufacturing clients.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop",
    createdAt: new Date(Date.now() - 23 * 60 * 60 * 1000), // 23 hours ago
    likes: 42,
    comments: 7,
    organization: {
      id: "org3",
      name: "LogiTech Systems",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=250&h=250&fit=crop",
    },
  },
];

interface NewsFeedProps {
  currentUser?: {
    id: string;
    organizationName: string;
    organizationLogo: string;
  };
}

export const NewsFeed = ({ 
  currentUser = {
    id: "user1",
    organizationName: "Acme Corp",
    organizationLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=250&h=250&fit=crop",
  }
}: NewsFeedProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <PostCreator user={currentUser} />
      
      {SAMPLE_POSTS.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      
      <Card className="p-8 text-center text-muted-foreground">
        <p>You've reached the end of your feed</p>
      </Card>
    </div>
  );
};
