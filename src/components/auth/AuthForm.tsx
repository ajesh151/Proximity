
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isSignUp = searchParams.get("signup") === "true";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [businessDocUploaded, setBusinessDocUploaded] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate authentication/registration process
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      if (isSignUp) {
        if (!businessDocUploaded) {
          toast({
            title: "Business verification required",
            description: "Please upload your business verification document",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }
        
        toast({
          title: "Verification Submitted",
          description: "Your business verification is pending review. We'll notify you once approved.",
        });
      } else {
        toast({
          title: "Welcome back",
          description: "You have successfully logged in",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setBusinessDocUploaded(true);
      toast({
        title: "Document uploaded",
        description: "Your business verification document was uploaded successfully",
      });
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 p-6 glass-card">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{isSignUp ? "Create Account" : "Welcome Back"}</h1>
        <p className="text-muted-foreground">
          {isSignUp
            ? "Create your business account to connect with other organizations"
            : "Sign in to your business account"}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Business Email</Label>
          <Input id="email" type="email" placeholder="name@company.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>

        {isSignUp && (
          <>
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" placeholder="Acme Corporation" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessDoc">Business Verification Document</Label>
              <p className="text-xs text-muted-foreground mb-2">
                Upload business license, registration certificate, or other official documentation
              </p>
              <Input 
                id="businessDoc"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                required
              />
              {businessDocUploaded && (
                <p className="text-xs text-green-600 dark:text-green-400">Document uploaded successfully</p>
              )}
            </div>
          </>
        )}

        {!isSignUp && (
          <div className="flex justify-end">
            <Button variant="link" className="px-0 font-normal" type="button">
              Forgot password?
            </Button>
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Processing..." : isSignUp ? "Submit for Verification" : "Sign In"}
        </Button>
      </form>

      <div className="text-center text-sm">
        {isSignUp ? (
          <p>
            Already have an account?{" "}
            <Button variant="link" className="p-0" onClick={() => navigate("/auth")}>
              Sign in
            </Button>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <Button variant="link" className="p-0" onClick={() => navigate("/auth?signup=true")}>
              Sign up
            </Button>
          </p>
        )}
      </div>
    </div>
  );
};
