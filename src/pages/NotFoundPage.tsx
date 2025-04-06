
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6 animate-float">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
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
      
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-xl mb-6">Oops! We got lost on our walk.</p>
      <p className="text-muted-foreground mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <Button onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
