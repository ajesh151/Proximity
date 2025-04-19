
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileUpload } from "@/components/verification/FileUpload";
import { useToast } from "@/hooks/use-toast";

const UserVerification = () => {
  const [step, setStep] = useState<number>(1);
  const [userRole, setUserRole] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [documentType, setDocumentType] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRoleSelect = (value: string) => {
    setUserRole(value);
    setStep(2);
  };

  const handleUploadComplete = () => {
    setIsUploading(false);
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call for verification submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Verification submitted",
      description: "We'll review your documents and get back to you soon.",
    });

    setIsSubmitting(false);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Business Verification</CardTitle>
              <CardDescription>
                To ensure the integrity of our platform, we need to verify your business or organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Step 1: Select your role</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${userRole === 'startup' ? 'border-primary bg-primary/5' : ''}`}
                      onClick={() => handleRoleSelect('startup')}
                    >
                      <h4 className="font-medium mb-2">Startup / Small Business</h4>
                      <p className="text-sm text-muted-foreground">For new and growing companies seeking connections and opportunities</p>
                    </div>
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${userRole === 'enterprise' ? 'border-primary bg-primary/5' : ''}`}
                      onClick={() => handleRoleSelect('enterprise')}
                    >
                      <h4 className="font-medium mb-2">Enterprise / Large Organization</h4>
                      <p className="text-sm text-muted-foreground">For established businesses looking to discover partners or investments</p>
                    </div>
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${userRole === 'investor' ? 'border-primary bg-primary/5' : ''}`}
                      onClick={() => handleRoleSelect('investor')}
                    >
                      <h4 className="font-medium mb-2">Investor / Mentor</h4>
                      <p className="text-sm text-muted-foreground">For VCs, angel investors, and business advisors</p>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Step 2: Business information and verification</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business/Organization Name</Label>
                      <Input 
                        id="businessName" 
                        placeholder="Enter your business name" 
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="documentType">Verification Document Type</Label>
                      <Select onValueChange={setDocumentType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business-license">Business License</SelectItem>
                          <SelectItem value="incorporation">Certificate of Incorporation</SelectItem>
                          <SelectItem value="tax-id">Tax ID Document</SelectItem>
                          <SelectItem value="government-id">Government-issued Business ID</SelectItem>
                          <SelectItem value="other">Other Business Verification</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Upload Verification Document</Label>
                      <FileUpload 
                        onUploadStart={() => setIsUploading(true)} 
                        onUploadComplete={handleUploadComplete}
                      />
                      <p className="text-xs text-muted-foreground">
                        Please upload a clear image of your official business documentation.
                        All uploads are encrypted and securely stored.
                      </p>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button variant="outline" onClick={() => setStep(1)}>
                        Back
                      </Button>
                      <Button 
                        disabled={!documentType || isUploading || !businessName} 
                        onClick={() => setStep(3)}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Step 3: Verification confirmation</h3>
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg">
                    <p>Your document has been uploaded successfully!</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">What happens next?</h4>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Our team will review your business documentation</li>
                      <li>Verification typically takes 1-2 business days</li>
                      <li>You'll receive an email notification when verification is complete</li>
                      <li>Once verified, you'll have full access to the platform features</li>
                    </ol>
                    
                    <div className="pt-6">
                      <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full">
                        {isSubmitting ? "Submitting..." : "Complete Verification Process"}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default UserVerification;
