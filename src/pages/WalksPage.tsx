
import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Calendar, Clock, Plus, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data - would come from API in real app
const UPCOMING_WALKS = [
  {
    id: '1',
    buddy: { name: 'Priya Singh', avatar: '' },
    date: 'Tomorrow',
    time: '7:30 AM',
    location: 'Joggers Park, Bandra',
    status: 'confirmed'
  }
];

const PENDING_WALKS = [
  {
    id: '2',
    buddy: { name: 'Amit Kumar', avatar: '' },
    date: 'Friday, 12 April',
    time: '6:00 PM',
    location: 'Marine Drive',
    status: 'pending'
  }
];

const PAST_WALKS = [
  {
    id: '3',
    buddy: { name: 'Ritu Sharma', avatar: '' },
    date: 'Wednesday, 3 April',
    time: '7:00 AM',
    location: 'Cubbon Park',
    status: 'completed'
  }
];

const WalksPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('upcoming');

  const handleAction = (walkId: string, action: 'accept' | 'decline') => {
    toast({
      title: action === 'accept' ? "Invitation Accepted" : "Invitation Declined",
      description: action === 'accept' 
        ? "The walk has been added to your calendar" 
        : "The invitation has been declined",
    });
  };

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Walks</h1>
          <Button size="sm" onClick={() => navigate('/walks/schedule')}>
            <Plus size={18} className="mr-1" />
            Schedule
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          
          {/* Upcoming Walks */}
          <TabsContent value="upcoming" className="mt-4 space-y-4">
            {UPCOMING_WALKS.length > 0 ? (
              UPCOMING_WALKS.map(walk => (
                <Card key={walk.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <Avatar className="h-10 w-10 mr-3 mt-1">
                        <AvatarImage src={walk.buddy.avatar} />
                        <AvatarFallback>{walk.buddy.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-medium">Walk with {walk.buddy.name}</h3>
                        <div className="grid grid-cols-[16px_1fr] gap-x-2 gap-y-1 text-sm text-muted-foreground mt-2 items-center">
                          <Calendar size={14} />
                          <span>{walk.date}</span>
                          <Clock size={14} />
                          <span>{walk.time}</span>
                          <MapPin size={14} />
                          <span>{walk.location}</span>
                        </div>
                        <div className="mt-3 flex space-x-2">
                          <Button variant="outline" className="flex-1" onClick={() => navigate(`/chat/${walk.id}`)}>
                            Message
                          </Button>
                          <Button className="flex-1" onClick={() => navigate(`/walks/${walk.id}`)}>
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No Upcoming Walks</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Schedule a walk or accept an invitation
                </p>
                <Button className="mt-4" onClick={() => navigate('/walks/schedule')}>
                  Schedule Walk
                </Button>
              </div>
            )}
          </TabsContent>
          
          {/* Pending Walks */}
          <TabsContent value="pending" className="mt-4 space-y-4">
            {PENDING_WALKS.length > 0 ? (
              PENDING_WALKS.map(walk => (
                <Card key={walk.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <Avatar className="h-10 w-10 mr-3 mt-1">
                        <AvatarImage src={walk.buddy.avatar} />
                        <AvatarFallback>{walk.buddy.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-medium">Invitation from {walk.buddy.name}</h3>
                        <div className="grid grid-cols-[16px_1fr] gap-x-2 gap-y-1 text-sm text-muted-foreground mt-2 items-center">
                          <Calendar size={14} />
                          <span>{walk.date}</span>
                          <Clock size={14} />
                          <span>{walk.time}</span>
                          <MapPin size={14} />
                          <span>{walk.location}</span>
                        </div>
                        <div className="mt-3 flex space-x-2">
                          <Button 
                            variant="outline" 
                            className="flex-1 space-x-1"
                            onClick={() => handleAction(walk.id, 'decline')}
                          >
                            <XCircle size={16} />
                            <span>Decline</span>
                          </Button>
                          <Button 
                            className="flex-1 space-x-1"
                            onClick={() => handleAction(walk.id, 'accept')}
                          >
                            <CheckCircle size={16} />
                            <span>Accept</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No Pending Invitations</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  You have no walk invitations pending
                </p>
              </div>
            )}
          </TabsContent>
          
          {/* Past Walks */}
          <TabsContent value="past" className="mt-4 space-y-4">
            {PAST_WALKS.length > 0 ? (
              PAST_WALKS.map(walk => (
                <Card key={walk.id}>
                  <CardContent className="p-4 opacity-80">
                    <div className="flex items-start">
                      <Avatar className="h-10 w-10 mr-3 mt-1">
                        <AvatarImage src={walk.buddy.avatar} />
                        <AvatarFallback>{walk.buddy.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-medium">Walk with {walk.buddy.name}</h3>
                        <div className="grid grid-cols-[16px_1fr] gap-x-2 gap-y-1 text-sm text-muted-foreground mt-2 items-center">
                          <Calendar size={14} />
                          <span>{walk.date}</span>
                          <Clock size={14} />
                          <span>{walk.time}</span>
                          <MapPin size={14} />
                          <span>{walk.location}</span>
                        </div>
                        <div className="mt-3 flex space-x-2">
                          <Button variant="outline" className="flex-1">
                            View Details
                          </Button>
                          <Button className="flex-1">
                            Schedule Again
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No Past Walks</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your walking history will appear here
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
};

export default WalksPage;
