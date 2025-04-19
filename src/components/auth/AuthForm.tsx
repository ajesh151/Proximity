
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Building2, User } from "lucide-react";
import { UserRole } from "@/types/user";

export const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isSignUp = searchParams.get("signup") === "true";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [businessDocUploaded, setBusinessDocUploaded] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | "">("");
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
        
        // For sign up, we redirect to the verification process
        navigate("/verification");
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

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
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
              <Label htmlFor="companyName">Organization Name</Label>
              <Input id="companyName" placeholder="Acme Corporation" required />
            </div>
            
            <div className="space-y-2">
              <Label>Select Your Role</Label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                <div 
                  className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer hover:border-primary transition-colors ${userRole === 'startup' ? 'border-primary bg-primary/5' : ''}`}
                  onClick={() => handleRoleSelect('startup')}
                >
                  <Building2 className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">Startup / Small Business</span>
                </div>
                <div 
                  className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer hover:border-primary transition-colors ${userRole === 'enterprise' ? 'border-primary bg-primary/5' : ''}`}
                  onClick={() => handleRoleSelect('enterprise')}
                >
                  <Briefcase className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">Enterprise / Large Org</span>
                </div>
                <div 
                  className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer hover:border-primary transition-colors ${userRole === 'investor' ? 'border-primary bg-primary/5' : ''}`}
                  onClick={() => handleRoleSelect('investor')}
                >
                  <User className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">Investor / Mentor</span>
                </div>
              </div>
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
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <a href="#" className="text-primary underline">
                  terms and conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary underline">
                  privacy policy
                </a>
              </label>
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

        <Button type="submit" className="w-full" disabled={isLoading || (isSignUp && (!userRole || !businessDocUploaded))}>
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
