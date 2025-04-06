
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, MapPin, Users, Calendar, Search, Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Simulated data - would come from API in real app
  const upcomingWalks = [
    {
      id: '1',
      buddy: { name: 'Priya Singh', avatar: '' },
      date: 'Tomorrow',
      time: '7:30 AM',
      location: 'Joggers Park, Bandra'
    }
  ];

  const nearbyBuddies = 7;
  const pendingInvites = 2;

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Welcome Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Hello, Rahul</h1>
            <p className="text-sm text-muted-foreground flex items-center mt-1">
              <MapPin size={14} className="mr-1" />
              Mumbai, MH
            </p>
          </div>
          <Avatar className="h-10 w-10">
            <AvatarImage src="" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button 
            className="h-auto py-4 flex-col items-center justify-center gap-1 text-base"
            onClick={() => navigate('/buddies')}
          >
            <Users size={24} />
            <span>Find Buddies</span>
          </Button>
          <Button 
            className="h-auto py-4 flex-col items-center justify-center gap-1 text-base"
            onClick={() => navigate('/walks/schedule')}
          >
            <Calendar size={24} />
            <span>Schedule Walk</span>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Nearby Buddies</p>
                <h3 className="text-2xl font-bold">{nearbyBuddies}</h3>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Pending Invites</p>
                <h3 className="text-2xl font-bold">{pendingInvites}</h3>
              </div>
              <Calendar className="h-8 w-8 text-accent" />
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Walks */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Upcoming Walks</h2>
            <Button variant="ghost" size="sm" className="flex items-center">
              <span>View All</span>
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>

          {upcomingWalks.length > 0 ? (
            <div className="space-y-3">
              {upcomingWalks.map(walk => (
                <Card key={walk.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={walk.buddy.avatar} />
                        <AvatarFallback>{walk.buddy.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-medium">{walk.buddy.name}</h3>
                        <div className="flex flex-col text-xs text-muted-foreground mt-1">
                          <div className="flex items-center">
                            <Calendar size={12} className="mr-1" />
                            <span>{walk.date}</span>
                          </div>
                          <div className="flex items-center mt-0.5">
                            <Clock size={12} className="mr-1" />
                            <span>{walk.time}</span>
                          </div>
                          <div className="flex items-center mt-0.5">
                            <MapPin size={12} className="mr-1" />
                            <span>{walk.location}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                <h3 className="font-medium">No Upcoming Walks</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Schedule a walk with a buddy to get started
                </p>
                <Button className="mt-4" onClick={() => navigate('/walks/schedule')}>
                  Schedule Walk
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Tips & Safety */}
        <Card className="bg-secondary/50">
          <CardContent className="p-4">
            <h3 className="font-medium">Walking Safety Tip</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Always meet your walk buddy in a public place for your first walk.
            </p>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default HomePage;
