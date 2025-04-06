
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Calendar, Search, Clock } from 'lucide-react';
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
    <AppLayout gradient="purple">
      <div className="p-6 space-y-6">
        {/* Good Morning Pill */}
        <div className="flex justify-center mt-2 mb-6">
          <div className="nav-pill px-4 py-2 rounded-full flex items-center space-x-2">
            <span className="text-sm font-medium">GOOD MORNING</span>
          </div>
        </div>
        
        {/* Welcome Header with Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/dec1c73f-0865-4496-bd1c-014aadd16f33.png" 
              alt="Buddy Walk Logo" 
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>

        {/* Welcome Card with User Profile */}
        <Card className="glass-card overflow-hidden shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Hello, Rahul</h2>
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                  <MapPin size={14} className="mr-1" />
                  Mumbai, MH
                </p>
              </div>
              <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                <AvatarImage src="" />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button 
            className="h-auto py-4 flex-col items-center justify-center gap-1 text-base shadow-soft rounded-2xl"
            onClick={() => navigate('/buddies')}
          >
            <Users size={24} />
            <span>Find Buddies</span>
          </Button>
          <Button 
            className="h-auto py-4 flex-col items-center justify-center gap-1 text-base shadow-soft rounded-2xl"
            onClick={() => navigate('/walks/schedule')}
          >
            <Calendar size={24} />
            <span>Schedule Walk</span>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Card className="glass-card shadow-soft">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Nearby Buddies</p>
                <h3 className="text-3xl font-bold">{nearbyBuddies}</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card shadow-soft">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Pending Invites</p>
                <h3 className="text-3xl font-bold">{pendingInvites}</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Walks */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Upcoming Walks</h2>
            <Button variant="ghost" size="sm" className="flex items-center">
              <span>View All</span>
            </Button>
          </div>

          {upcomingWalks.length > 0 ? (
            <div className="space-y-3">
              {upcomingWalks.map(walk => (
                <Card key={walk.id} className="glass-card shadow-soft overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-3">
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
                      <Button variant="outline" size="sm" className="rounded-full">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium">No Upcoming Walks</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Schedule a walk with a buddy to get started
                </p>
                <Button className="mt-4 rounded-full" onClick={() => navigate('/walks/schedule')}>
                  Schedule Walk
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Tips & Safety */}
        <Card className="bg-gradient-blue shadow-soft">
          <CardContent className="p-4">
            <h3 className="font-medium">Walking Safety Tip</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Always meet your walk buddy in a public place for your first walk.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default HomePage;
