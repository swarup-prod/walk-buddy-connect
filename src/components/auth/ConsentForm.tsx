
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const ConsentForm: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [consents, setConsents] = useState({
    terms: false,
    privacy: false,
    location: false,
    notifications: false,
  });
  const { toast } = useToast();

  const handleConsent = (key: keyof typeof consents) => {
    setConsents(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consents.terms || !consents.privacy) {
      toast({
        title: "Required Consents",
        description: "You must agree to the Terms of Service and Privacy Policy to continue",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, save these consent choices to user profile
    onComplete();
  };

  return (
    <div className="space-y-6 w-full max-w-sm">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Your Privacy Matters</h1>
        <p className="text-sm text-muted-foreground">
          Please review and consent to our policies before continuing
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="terms" 
              checked={consents.terms} 
              onCheckedChange={() => handleConsent('terms')}
            />
            <div className="grid gap-1">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Terms of Service
              </label>
              <p className="text-xs text-muted-foreground">
                I agree to the <Link to="/terms" className="text-primary underline">Terms of Service</Link>
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="privacy" 
              checked={consents.privacy} 
              onCheckedChange={() => handleConsent('privacy')}
            />
            <div className="grid gap-1">
              <label
                htmlFor="privacy"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Privacy Policy
              </label>
              <p className="text-xs text-muted-foreground">
                I agree to the <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="location" 
              checked={consents.location} 
              onCheckedChange={() => handleConsent('location')}
            />
            <div className="grid gap-1">
              <label
                htmlFor="location"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Location Services
              </label>
              <p className="text-xs text-muted-foreground">
                I consent to sharing my location data to find walking buddies nearby
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="notifications" 
              checked={consents.notifications} 
              onCheckedChange={() => handleConsent('notifications')}
            />
            <div className="grid gap-1">
              <label
                htmlFor="notifications"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Notifications
              </label>
              <p className="text-xs text-muted-foreground">
                I consent to receiving push notifications about walk invites and messages
              </p>
            </div>
          </div>
        </div>
        
        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>
    </div>
  );
};

export default ConsentForm;
