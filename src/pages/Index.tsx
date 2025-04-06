
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-purple flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Buddy Walk</h1>
          <p className="text-xl text-muted-foreground">Find your perfect walking partner</p>
        </div>
        
        <Card className="glass-card p-6 shadow-card">
          <div className="space-y-4">
            <p className="text-center text-muted-foreground">
              Connect with people in your neighborhood who enjoy walking and make your daily exercise more enjoyable
            </p>
            
            <div className="grid gap-3">
              <Button 
                onClick={() => navigate('/login')} 
                className="w-full py-6 rounded-full text-lg"
              >
                Login
              </Button>
              
              <Button 
                onClick={() => navigate('/home')} 
                variant="outline" 
                className="w-full py-6 rounded-full text-lg"
              >
                Explore App
              </Button>
            </div>
          </div>
        </Card>
        
        <p className="text-sm text-center text-muted-foreground mt-8">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Index;
