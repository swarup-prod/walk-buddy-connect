
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, User, Clock, Calendar } from 'lucide-react';

interface BuddyProps {
  id: string;
  name: string;
  distance: string;
  activeTime: string;
  interests: string[];
  imageUrl?: string;
  onInvite: (id: string) => void;
  onViewProfile: (id: string) => void;
}

const BuddyCard: React.FC<BuddyProps> = ({
  id,
  name,
  distance,
  activeTime,
  interests,
  imageUrl,
  onInvite,
  onViewProfile,
}) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col">
          {/* Top section with user info */}
          <div className="p-4 flex items-center space-x-3">
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center overflow-hidden">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={name} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <User size={24} className="text-muted-foreground" />
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="font-medium text-lg">{name}</h3>
              <div className="flex flex-col gap-1 mt-1">
                <div className="flex items-center text-xs text-muted-foreground">
                  <MapPin size={12} className="mr-1" />
                  <span>{distance} away</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock size={12} className="mr-1" />
                  <span>Active: {activeTime}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interests */}
          <div className="px-4 pb-3">
            <div className="flex flex-wrap gap-1.5">
              {interests.map((interest, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Actions */}
          <div className="p-3 flex space-x-2 border-t">
            <Button 
              variant="outline" 
              className="flex-1 h-9"
              onClick={() => onViewProfile(id)}
            >
              View Profile
            </Button>
            <Button 
              className="flex-1 h-9"
              onClick={() => onInvite(id)}
            >
              Invite for Walk
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BuddyCard;
