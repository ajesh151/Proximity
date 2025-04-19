
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';

const Auth = () => {
  const navigate = useNavigate();
  
  // Redirect authenticated users (demo only - would use actual auth state)
  useEffect(() => {
    // Simulating auth check - would check actual auth state in real app
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-proximity-50 to-proximity-100 dark:from-proximity-950 dark:to-proximity-900 p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row overflow-hidden rounded-lg shadow-xl">
        <div className="lg:w-1/2 p-8 bg-proximity-700 dark:bg-proximity-800 text-white flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Proximity</h1>
            <p className="text-proximity-100">The B2B social platform for verified businesses</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Verified Businesses Only</h3>
                <p className="text-sm text-proximity-200">Connect with legitimate organizations through our verification process</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Build Business Connections</h3>
                <p className="text-sm text-proximity-200">Expand your network with relevant industry connections</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Discover Opportunities</h3>
                <p className="text-sm text-proximity-200">Find partners, suppliers, and clients in your industry</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 bg-white dark:bg-gray-900 flex items-center justify-center p-4">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;
