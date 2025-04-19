
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, Flag } from "lucide-react";
import { PitchComment } from "@/types/user";

interface PitchCommentsProps {
  pitchId: string;
}

export const PitchComments = ({ pitchId }: PitchCommentsProps) => {
  const [expandedReplies, setExpandedReplies] = useState<Record<string, boolean>>({});
  
  // Mock comments data - in a real app, you'd fetch this from an API
  const mockComments: PitchComment[] = [
    {
      id: "c1",
      pitchId,
      userId: "user1",
      organizationId: "org5",
      content: "This is a fascinating product. How are you handling data security and privacy concerns when tracking supply chain information across multiple companies?",
      isPrivate: false,
      createdAt: new Date("2023-12-16T10:30:00"),
      user: {
        name: "Michael Bronstein",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        organization: {
          name: "TechVentures Inc.",
          role: "investor"
        }
      }
    },
    {
      id: "c2",
      pitchId,
      userId: "user2",
      organizationId: "org1",
      content: "Thanks for your question! We've implemented end-to-end encryption and a permissioned blockchain approach to ensure data security. Each company maintains control over their own data and can set granular access permissions for what they share with partners.",
      isPrivate: false,
      createdAt: new Date("2023-12-16T14:25:00"),
      parentId: "c1",
      user: {
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        organization: {
          name: "GreenPath Solutions",
          role: "startup"
        }
      }
    },
    {
      id: "c3",
      pitchId,
      userId: "user3",
      organizationId: "org6",
      content: "I'm interested in understanding more about your customer acquisition strategy. With a relatively high price point for enterprise SaaS, what's been your most effective channel so far?",
      isPrivate: false,
      createdAt: new Date("2023-12-17T09:15:00"),
      user: {
        name: "Jennifer Wu",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        organization: {
          name: "BlueOcean Capital",
          role: "investor"
        }
      }
    },
    {
      id: "c4",
      pitchId,
      userId: "user4",
      organizationId: "org7",
      content: "Have you considered integrating with existing ERP systems like SAP or Oracle? That could be a game-changer for enterprise adoption.",
      isPrivate: false,
      createdAt: new Date("2023-12-18T11:45:00"),
      user: {
        name: "Robert Chen",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        organization: {
          name: "Enterprise Solutions Group",
          role: "enterprise"
        }
      }
    }
  ];

  // Filter parent comments and replies
  const parentComments = mockComments.filter(comment => !comment.parentId);
  const getReplies = (parentId: string) => mockComments.filter(comment => comment.parentId === parentId);
  
  // Format date
  const formatDate = (date: Date) => {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.floor((new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
      'day'
    );
  };
  
  const toggleReplies = (commentId: string) => {
    setExpandedReplies(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  return (
    <div className="space-y-6">
      {parentComments.length > 0 ? (
        parentComments.map(comment => {
          const replies = getReplies(comment.id);
          
          return (
            <div key={comment.id} className="space-y-4">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={comment.user?.avatar} alt={comment.user?.name} />
                  <AvatarFallback>{comment.user?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">{comment.user?.name}</span>
                      {comment.user?.organization && (
                        <>
                          <span className="text-muted-foreground mx-1">·</span>
                          <span className="text-sm">{comment.user.organization.name}</span>
                        </>
                      )}
                      <span className="text-muted-foreground text-xs ml-2">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                    
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="mt-1">{comment.content}</p>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <Button variant="ghost" size="sm" className="h-8 text-muted-foreground">
                      <ThumbsUp className="h-4 w-4 mr-1" /> Like
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 text-muted-foreground">
                      <MessageSquare className="h-4 w-4 mr-1" /> Reply
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Replies */}
              {replies.length > 0 && (
                <div className="ml-14 space-y-4">
                  {expandedReplies[comment.id] ? (
                    replies.map(reply => (
                      <div key={reply.id} className="flex gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={reply.user?.avatar} alt={reply.user?.name} />
                          <AvatarFallback>{reply.user?.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center">
                            <span className="font-medium">{reply.user?.name}</span>
                            {reply.user?.organization && (
                              <>
                                <span className="text-muted-foreground mx-1">·</span>
                                <span className="text-sm">{reply.user.organization.name}</span>
                              </>
                            )}
                            <span className="text-muted-foreground text-xs ml-2">
                              {formatDate(reply.createdAt)}
                            </span>
                          </div>
                          
                          <p className="mt-1">{reply.content}</p>
                          
                          <div className="flex items-center gap-4 mt-2">
                            <Button variant="ghost" size="sm" className="h-7 text-muted-foreground">
                              <ThumbsUp className="h-3 w-3 mr-1" /> Like
                            </Button>
                            <Button variant="ghost" size="sm" className="h-7 text-muted-foreground">
                              <MessageSquare className="h-3 w-3 mr-1" /> Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <Button 
                      variant="link" 
                      className="text-sm pl-0" 
                      onClick={() => toggleReplies(comment.id)}
                    >
                      Show {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
                    </Button>
                  )}
                  
                  {expandedReplies[comment.id] && (
                    <Button 
                      variant="link" 
                      className="text-sm pl-0" 
                      onClick={() => toggleReplies(comment.id)}
                    >
                      Hide replies
                    </Button>
                  )}
                </div>
              )}
            </div>
          );
        })
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          <MessageSquare className="h-8 w-8 mx-auto mb-2" />
          <p>No comments yet</p>
          <p className="text-sm">Be the first to start the discussion</p>
        </div>
      )}
    </div>
  );
};
