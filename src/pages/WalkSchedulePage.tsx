
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import WalkScheduler from '@/components/walks/WalkScheduler';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WalkSchedulePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppLayout gradient="blend">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 rounded-full"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft />
          </Button>
          <h1 className="text-2xl font-bold">Schedule a Walk</h1>
        </div>
        
        <div className="mt-4">
          <Card className="glass-card p-6 shadow-card">
            <WalkScheduler />
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default WalkSchedulePage;
