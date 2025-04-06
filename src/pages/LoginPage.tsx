
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PhoneLoginForm from '@/components/auth/PhoneLoginForm';
import ConsentForm from '@/components/auth/ConsentForm';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [step, setStep] = useState<'login' | 'consent'>('login');

  const handleLoginComplete = () => {
    setStep('consent');
  };

  const handleConsentComplete = () => {
    // Navigate to profile setup or home
    window.location.href = '/profile-setup';
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo and App Name */}
      <div className="p-6 text-center">
        <div className="inline-block mb-2 animate-float">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M8 16a5 5 0 0 1 10 0"></path>
              <path d="M10 16c-2.2 0-4-1.8-4-4"></path>
              <path d="M14 16c2.2 0-4-1.8-4-4"></path>
              <path d="M8 16v-2"></path>
              <path d="M16 16v-2"></path>
              <path d="M12 4v4"></path>
              <path d="M4 12h4"></path>
              <path d="M16 12h4"></path>
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-foreground">WalkBuddy Connect</h1>
        <p className="text-sm text-muted-foreground mt-1">Find walking partners near you</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        {step === 'login' ? (
          <div className="w-full max-w-sm">
            <Tabs defaultValue="phone" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="phone">Phone</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
              </TabsList>
              <TabsContent value="phone" className="mt-0">
                <PhoneLoginForm />
                {/* In a real app, you'd handle this transition properly */}
                <div className="mt-4 text-center">
                  <Button 
                    variant="link" 
                    className="text-sm text-muted-foreground"
                    onClick={handleLoginComplete}
                  >
                    Demo: Continue to consent
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="email" className="mt-0">
                <div className="text-center p-6">
                  <p className="text-muted-foreground">
                    Email login will be available soon.
                  </p>
                  <p className="mt-2 text-sm">
                    Please use phone login for now.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <ConsentForm onComplete={handleConsentComplete} />
        )}

        {/* Footer Links */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <div className="space-x-2">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// Add a Button component at the top of the file since we use it outside the import
const Button = ({ children, variant = "default", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    link: "text-primary underline-offset-4 hover:underline",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
