
import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import BuddyCard from '@/components/buddies/BuddyCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data - would come from API in real app
const MOCK_BUDDIES = [
  {
    id: '1',
    name: 'Priya Singh',
    distance: '1.2 km',
    activeTime: 'Mornings',
    interests: ['Morning Walks', 'Nature Trails', 'Fitness Walking'],
    imageUrl: ''
  },
  {
    id: '2',
    name: 'Amit Kumar',
    distance: '2.4 km',
    activeTime: 'Evenings & Weekends',
    interests: ['Evening Walks', 'Photography Walks'],
    imageUrl: ''
  },
  {
    id: '3',
    name: 'Ritu Sharma',
    distance: '3.1 km',
    activeTime: 'Evenings',
    interests: ['Evening Walks', 'City Walks', 'Dog Walking'],
    imageUrl: ''
  }
];

const BuddiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [buddies, setBuddies] = useState(MOCK_BUDDIES);
  const { toast } = useToast();

  const handleInvite = (id: string) => {
    // In a real app, this would send an invite
    toast({
      title: "Walk Invitation",
      description: "Invite sent! You can now schedule a walk.",
    });
  };

  const handleViewProfile = (id: string) => {
    // In a real app, navigate to the profile page
    toast({
      title: "View Profile",
      description: "Viewing full profile will be available soon.",
    });
  };

  const filteredBuddies = buddies.filter(
    buddy => buddy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Find Buddies</h1>
          <p className="text-sm text-muted-foreground flex items-center mt-1">
            <MapPin size={14} className="mr-1" />
            Within 5 km radius
          </p>
        </div>

        {/* Search & Filter */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by name or interest..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter size={18} />
            </Button>
          </div>
        </div>

        {/* Buddy List */}
        <div className="space-y-4">
          {filteredBuddies.length > 0 ? (
            filteredBuddies.map(buddy => (
              <BuddyCard
                key={buddy.id}
                {...buddy}
                onInvite={handleInvite}
                onViewProfile={handleViewProfile}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <Users className="h-12 w-12 mx-auto text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">
                {searchQuery ? 'No matching buddies found' : 'No buddies available'}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {searchQuery 
                  ? 'Try changing your search query'
                  : 'Try expanding your search radius'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </MobileLayout>
  );
};

// Added Users icon since it wasn't imported but is used in the component
const Users = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default BuddiesPage;
