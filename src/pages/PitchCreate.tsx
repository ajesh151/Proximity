import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Upload, Video, FileText, Lightbulb, AlertCircle } from "lucide-react";

const PitchCreate = () => {
  const [currentTab, setCurrentTab] = useState("basics");
  const [progress, setProgress] = useState(25);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Form state
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [industry, setIndustry] = useState<string[]>([]);
  const [stage, setStage] = useState("");
  const [fundingAmount, setFundingAmount] = useState("");
  const [videoUploaded, setVideoUploaded] = useState(false);
  const [deckUploaded, setDeckUploaded] = useState(false);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    
    // Update progress based on tab
    switch (tab) {
      case "basics":
        setProgress(25);
        break;
      case "details":
        setProgress(50);
        break;
      case "media":
        setProgress(75);
        break;
      case "review":
        setProgress(100);
        break;
    }
  };

  const handleVideoUpload = () => {
    // Simulate video upload
    setTimeout(() => {
      setVideoUploaded(true);
      toast({
        title: "Video uploaded",
        description: "Your pitch video has been uploaded successfully",
      });
    }, 1500);
  };

  const handleDeckUpload = () => {
    // Simulate deck upload
    setTimeout(() => {
      setDeckUploaded(true);
      toast({
        title: "Pitch deck uploaded",
        description: "Your pitch deck has been uploaded successfully",
      });
    }, 1500);
  };

  const handleSubmit = async () => {
    if (!title || !summary || !stage) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Pitch submitted successfully!",
      description: "Your pitch is now live in the Pitch Hub",
    });
    
    // Redirect to the pitch detail page
    navigate("/pitches/1");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Create New Pitch</h1>
            <p className="text-muted-foreground">
              Share your business idea with potential investors and partners
            </p>
          </div>
        </div>
        
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-muted-foreground">{progress}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Pitch Creation Steps</CardTitle>
                <CardDescription>Complete all sections to publish your pitch</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="border-t">
                  <button 
                    className={`w-full flex items-center px-4 py-3 hover:bg-muted text-left ${currentTab === 'basics' ? 'bg-muted' : ''}`}
                    onClick={() => handleTabChange('basics')}
                  >
                    <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${title && summary ? 'bg-green-100 text-green-700' : 'bg-muted-foreground/20'}`}>
                      {title && summary ? <CheckCircle className="h-4 w-4" /> : "1"}
                    </div>
                    <div>
                      <div className="font-medium">Basics</div>
                      <div className="text-xs text-muted-foreground">Title, summary, and category</div>
                    </div>
                  </button>
                  
                  <button 
                    className={`w-full flex items-center px-4 py-3 hover:bg-muted text-left ${currentTab === 'details' ? 'bg-muted' : ''}`}
                    onClick={() => handleTabChange('details')}
                  >
                    <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${stage && fundingAmount ? 'bg-green-100 text-green-700' : 'bg-muted-foreground/20'}`}>
                      {stage && fundingAmount ? <CheckCircle className="h-4 w-4" /> : "2"}
                    </div>
                    <div>
                      <div className="font-medium">Details</div>
                      <div className="text-xs text-muted-foreground">Funding, stage, and metrics</div>
                    </div>
                  </button>
                  
                  <button 
                    className={`w-full flex items-center px-4 py-3 hover:bg-muted text-left ${currentTab === 'media' ? 'bg-muted' : ''}`}
                    onClick={() => handleTabChange('media')}
                  >
                    <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${videoUploaded || deckUploaded ? 'bg-green-100 text-green-700' : 'bg-muted-foreground/20'}`}>
                      {videoUploaded && deckUploaded ? <CheckCircle className="h-4 w-4" /> : "3"}
                    </div>
                    <div>
                      <div className="font-medium">Media</div>
                      <div className="text-xs text-muted-foreground">Video and pitch deck</div>
                    </div>
                  </button>
                  
                  <button 
                    className={`w-full flex items-center px-4 py-3 hover:bg-muted text-left ${currentTab === 'review' ? 'bg-muted' : ''}`}
                    onClick={() => handleTabChange('review')}
                  >
                    <div className="w-6 h-6 rounded-full mr-3 flex items-center justify-center bg-muted-foreground/20">
                      4
                    </div>
                    <div>
                      <div className="font-medium">Review & Submit</div>
                      <div className="text-xs text-muted-foreground">Publish your pitch</div>
                    </div>
                  </button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" /> Pitch Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium">Keep it concise</h4>
                  <p className="text-muted-foreground">Focus on your unique value proposition and what makes your business special.</p>
                </div>
                <div>
                  <h4 className="font-medium">Share real metrics</h4>
                  <p className="text-muted-foreground">Include actual numbers and achievements to build credibility with investors.</p>
                </div>
                <div>
                  <h4 className="font-medium">Show your team</h4>
                  <p className="text-muted-foreground">Highlight your team's expertise and why you're the right people to execute this vision.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{
                  currentTab === "basics" ? "Basic Information" :
                  currentTab === "details" ? "Pitch Details" :
                  currentTab === "media" ? "Media Upload" :
                  "Review Your Pitch"
                }</CardTitle>
                <CardDescription>{
                  currentTab === "basics" ? "Add the core information about your pitch" :
                  currentTab === "details" ? "Provide specific details about your funding needs" :
                  currentTab === "media" ? "Upload your pitch video and deck" :
                  "Review all information before submitting"
                }</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
                  {/* Basics tab */}
                  <TabsContent value="basics" className="space-y-6 mt-0">
                    <div className="space-y-2">
                      <Label htmlFor="title">Pitch Title<span className="text-red-500">*</span></Label>
                      <Input
                        id="title"
                        placeholder="E.g., EcoTrack: Sustainable Supply Chain Analytics"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground">
                        A clear, concise title that describes your business (60 characters maximum)
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="summary">Summary<span className="text-red-500">*</span></Label>
                      <Textarea
                        id="summary"
                        placeholder="Briefly describe your business or product in 1-2 sentences"
                        className="min-h-24"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground">
                        This will appear in search results and pitch cards (160 characters recommended)
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Full Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Provide a detailed explanation of your business, product, market opportunity, and competitive advantage"
                        className="min-h-32"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Industry Categories<span className="text-red-500">*</span></Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select primary industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="fintech">Fintech</SelectItem>
                          <SelectItem value="healthtech">Healthcare Tech</SelectItem>
                          <SelectItem value="ecommerce">E-Commerce</SelectItem>
                          <SelectItem value="sustainability">Sustainability</SelectItem>
                          <SelectItem value="ai">Artificial Intelligence</SelectItem>
                          <SelectItem value="blockchain">Blockchain</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        Choose the primary industry your business operates in
                      </p>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button onClick={() => handleTabChange("details")}>
                        Continue to Details
                      </Button>
                    </div>
                  </TabsContent>
                  
                  {/* Details tab */}
                  <TabsContent value="details" className="space-y-6 mt-0">
                    <div className="space-y-2">
                      <Label htmlFor="stage">Funding Stage<span className="text-red-500">*</span></Label>
                      <Select value={stage} onValueChange={setStage}>
                        <SelectTrigger id="stage">
                          <SelectValue placeholder="Select funding stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seed">Seed</SelectItem>
                          <SelectItem value="seriesA">Series A</SelectItem>
                          <SelectItem value="seriesB">Series B</SelectItem>
                          <SelectItem value="seriesC">Series C</SelectItem>
                          <SelectItem value="growth">Growth</SelectItem>
                          <SelectItem value="partnership">Partnership (Non-Equity)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fundingAmount">Funding Amount<span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                        <Input
                          id="fundingAmount"
                          className="pl-8"
                          placeholder="500000"
                          value={fundingAmount}
                          onChange={(e) => setFundingAmount(e.target.value)}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Enter the total funding amount you're seeking (numeric only)
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="region">Primary Region</Label>
                        <Select>
                          <SelectTrigger id="region">
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="northAmerica">North America</SelectItem>
                            <SelectItem value="europe">Europe</SelectItem>
                            <SelectItem value="asia">Asia</SelectItem>
                            <SelectItem value="latinAmerica">Latin America</SelectItem>
                            <SelectItem value="africa">Africa</SelectItem>
                            <SelectItem value="oceania">Australia & Oceania</SelectItem>
                            <SelectItem value="global">Global</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="teamSize">Team Size</Label>
                        <Select>
                          <SelectTrigger id="teamSize">
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-5">1-5 employees</SelectItem>
                            <SelectItem value="6-10">6-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201+">201+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="revenue">Annual Revenue (optional)</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                          <Input id="revenue" className="pl-8" placeholder="100000" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="growth">Monthly Growth Rate (optional)</Label>
                        <div className="relative">
                          <Input id="growth" placeholder="15" />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2">%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => handleTabChange("basics")}>
                        Back
                      </Button>
                      <Button onClick={() => handleTabChange("media")}>
                        Continue to Media
                      </Button>
                    </div>
                  </TabsContent>
                  
                  {/* Media tab */}
                  <TabsContent value="media" className="space-y-6 mt-0">
                    <div className="space-y-4">
                      <h3 className="flex items-center text-lg font-medium">
                        <Video className="h-5 w-5 mr-2" /> Pitch Video
                      </h3>
                      
                      {!videoUploaded ? (
                        <div className="border-2 border-dashed rounded-lg p-6 text-center">
                          <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                          <h4 className="font-medium">Upload Your Pitch Video</h4>
                          <p className="text-sm text-muted-foreground mt-1 mb-4">
                            2-5 minute video that explains your business (MP4 or MOV formats, max 100MB)
                          </p>
                          <Button onClick={handleVideoUpload}>
                            Select Video File
                          </Button>
                        </div>
                      ) : (
                        <div className="border rounded-lg p-6 text-center bg-green-50 dark:bg-green-900/20">
                          <CheckCircle className="h-10 w-10 mx-auto text-green-600 mb-4" />
                          <h4 className="font-medium">Video Uploaded Successfully</h4>
                          <p className="text-sm text-muted-foreground mt-1 mb-4">
                            pitch_video_final.mp4 (24MB)
                          </p>
                          <Button variant="outline" onClick={() => setVideoUploaded(false)}>
                            Replace Video
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="flex items-center text-lg font-medium">
                        <FileText className="h-5 w-5 mr-2" /> Pitch Deck
                      </h3>
                      
                      {!deckUploaded ? (
                        <div className="border-2 border-dashed rounded-lg p-6 text-center">
                          <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                          <h4 className="font-medium">Upload Your Pitch Deck</h4>
                          <p className="text-sm text-muted-foreground mt-1 mb-4">
                            PDF format recommended, max 20MB
                          </p>
                          <Button onClick={handleDeckUpload}>
                            Select Deck File
                          </Button>
                        </div>
                      ) : (
                        <div className="border rounded-lg p-6 text-center bg-green-50 dark:bg-green-900/20">
                          <CheckCircle className="h-10 w-10 mx-auto text-green-600 mb-4" />
                          <h4 className="font-medium">Deck Uploaded Successfully</h4>
                          <p className="text-sm text-muted-foreground mt-1 mb-4">
                            company_pitch_deck_v3.pdf (4.2MB)
                          </p>
                          <Button variant="outline" onClick={() => setDeckUploaded(false)}>
                            Replace Deck
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => handleTabChange("details")}>
                        Back
                      </Button>
                      <Button onClick={() => handleTabChange("review")}>
                        Continue to Review
                      </Button>
                    </div>
                  </TabsContent>
                  
                  {/* Review tab */}
                  <TabsContent value="review" className="space-y-6 mt-0">
                    {(!title || !summary || !stage) && (
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex items-start mb-6">
                        <AlertCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-amber-800 dark:text-amber-300">Required information missing</h4>
                          <p className="text-sm text-amber-700 dark:text-amber-400">
                            Please fill in all required fields before submitting your pitch.
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Pitch Summary</h3>
                        <Card>
                          <CardContent className="p-4 space-y-4">
                            <div>
                              <h4 className="text-sm font-medium">Title</h4>
                              <p>{title || "Not specified"}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium">Summary</h4>
                              <p>{summary || "Not specified"}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium">Stage & Funding</h4>
                              <p>{stage ? `${stage.charAt(0).toUpperCase() + stage.slice(1)} stage` : "Not specified"} • {fundingAmount ? `$${parseInt(fundingAmount).toLocaleString()}` : "Amount not specified"}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium">Media</h4>
                              <div className="flex gap-4 mt-1">
                                {videoUploaded && (
                                  <span className="flex items-center text-green-600">
                                    <CheckCircle className="h-4 w-4 mr-1" /> Video uploaded
                                  </span>
                                )}
                                {deckUploaded && (
                                  <span className="flex items-center text-green-600">
                                    <CheckCircle className="h-4 w-4 mr-1" /> Deck uploaded
                                  </span>
                                )}
                                {!videoUploaded && !deckUploaded && "No media uploaded"}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Next Steps</h3>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                          <li>Your pitch will be reviewed by our team to ensure it meets our community guidelines</li>
                          <li>Once approved, your pitch will be visible in the Pitch Hub</li>
                          <li>You'll be notified when investors or enterprises show interest in your pitch</li>
                          <li>You can update your pitch details at any time from your dashboard</li>
                        </ol>
                      </div>
                      
                      <div className="flex justify-between pt-4">
                        <Button variant="outline" onClick={() => handleTabChange("media")}>
                          Back
                        </Button>
                        <Button 
                          disabled={isSubmitting || !title || !summary || !stage} 
                          onClick={handleSubmit}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Pitch"}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchCreate;
