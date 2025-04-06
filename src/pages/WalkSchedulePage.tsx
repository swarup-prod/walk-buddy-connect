
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import WalkScheduler from '@/components/walks/WalkScheduler';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WalkSchedulePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft />
          </Button>
          <h1 className="text-xl font-bold">Schedule a Walk</h1>
        </div>
        
        <div className="flex justify-center">
          <WalkScheduler />
        </div>
      </div>
    </MobileLayout>
  );
};

export default WalkSchedulePage;
