
import { useState } from "react";
import { Image, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

interface PostCreatorProps {
  user: {
    id: string;
    organizationName: string;
    organizationLogo: string;
  };
  onPostCreated?: () => void;
}

export const PostCreator = ({ 
  user = {
    id: "1",
    organizationName: "Acme Corp",
    organizationLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=250&h=250&fit=crop",
  },
  onPostCreated 
}: PostCreatorProps) => {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [showImageInput, setShowImageInput] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Post created",
        description: "Your post has been published",
      });
      
      setContent("");
      setImageUrl("");
      setShowImageInput(false);
      onPostCreated?.();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create post",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mb-6">
      <form onSubmit={handleSubmit}>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.organizationLogo} alt={user.organizationName} />
              <AvatarFallback>{user.organizationName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Share an update or announcement..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-24 resize-none"
              />
              
              {showImageInput && (
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Paste image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full p-2 rounded-md border border-input bg-transparent text-sm"
                  />
                </div>
              )}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="px-4 py-3 flex justify-between border-t">
          <div className="flex gap-2">
            <Button 
              type="button" 
              variant="ghost" 
              size="sm"
              onClick={() => setShowImageInput(!showImageInput)}
            >
              <Image className="h-4 w-4 mr-2" />
              Image
            </Button>
            <Button type="button" variant="ghost" size="sm">
              <LinkIcon className="h-4 w-4 mr-2" />
              Link
            </Button>
          </div>
          
          <Button 
            type="submit" 
            size="sm" 
            disabled={isLoading || !content.trim()}
          >
            {isLoading ? "Posting..." : "Post"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
