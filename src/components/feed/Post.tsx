
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { Heart, MessageSquare, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

interface PostProps {
  post: {
    id: string;
    content: string;
    image?: string;
    createdAt: Date;
    likes: number;
    comments: number;
    organization: {
      id: string;
      name: string;
      logo: string;
    };
  };
}

export const Post = ({ post }: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const { toast } = useToast();
  
  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };
  
  const handleComment = () => {
    // Placeholder for comment functionality
    toast({
      title: "Comments",
      description: "Comments feature coming soon",
    });
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(`https://proximity.example.com/post/${post.id}`);
    toast({
      title: "Link copied",
      description: "Post link copied to clipboard",
    });
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.organization.logo} alt={post.organization.name} />
            <AvatarFallback>{post.organization.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <Link to={`/profile/${post.organization.id}`} className="font-medium hover:underline">
              {post.organization.name}
            </Link>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <p>{post.content}</p>
          {post.image && (
            <img
              src={post.image}
              alt="Post attachment"
              className="w-full h-auto rounded-lg object-cover max-h-96"
            />
          )}
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0 border-t">
        <div className="flex justify-between w-full">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center gap-1 ${liked ? 'text-red-500' : ''}`}
            onClick={handleLike}
          >
            <Heart className="h-4 w-4" />
            <span>{likeCount}</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="flex items-center gap-1"
            onClick={handleComment}
          >
            <MessageSquare className="h-4 w-4" />
            <span>{post.comments}</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="flex items-center gap-1"
            onClick={handleShare}
          >
            <Share className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
