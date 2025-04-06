
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to home page after 2.5 seconds
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2500);
    
    // Clean up the timer
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen bg-gradient-purple flex flex-col items-center justify-center p-6">
      <div className="animate-fade-in flex flex-col items-center">
        <div className="mb-4 animate-pulse-soft">
          <img 
            src="/lovable-uploads/dec1c73f-0865-4496-bd1c-014aadd16f33.png" 
            alt="Buddy Walk Logo" 
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
