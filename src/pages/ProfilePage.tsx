
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Edit, LogOut, Bell, Shield, UserCog, Trash2, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Mock data - would come from user profile in real app
const USER = {
  name: 'Rahul Sharma',
  bio: 'Fitness enthusiast who loves morning walks by the beach.',
  interests: ['Morning Walks', 'Fitness Walking', 'Nature Trails'],
  walkCount: 12,
  buddyCount: 5,
};

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
    navigate('/login');
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion Request",
      description: "Your account deletion request has been received",
    });
  };

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-3">
            <AvatarImage src="" />
            <AvatarFallback className="text-2xl">{USER.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">{USER.name}</h1>
          <p className="text-sm text-muted-foreground text-center max-w-xs mt-1">
            {USER.bio}
          </p>
          <Button variant="outline" size="sm" className="mt-3" onClick={() => navigate('/profile/edit')}>
            <Edit size={14} className="mr-1" />
            Edit Profile
          </Button>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold">{USER.walkCount}</p>
              <p className="text-sm text-muted-foreground">Walks Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold">{USER.buddyCount}</p>
              <p className="text-sm text-muted-foreground">Walking Buddies</p>
            </CardContent>
          </Card>
        </div>

        {/* Interests */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Walking Interests</h2>
          <div className="flex flex-wrap gap-2">
            {USER.interests.map((interest, i) => (
              <Badge key={i} variant="secondary">
                {interest}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Settings */}
        <div className="space-y-1">
          <h2 className="text-lg font-semibold mb-3">Settings</h2>
          
          <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/profile/notifications')}>
            <Bell size={18} className="mr-3" />
            Notifications
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/profile/privacy')}>
            <Shield size={18} className="mr-3" />
            Privacy & Security
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/profile/account')}>
            <UserCog size={18} className="mr-3" />
            Account Settings
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/help')}>
            <HelpCircle size={18} className="mr-3" />
            Help & Support
          </Button>
        </div>

        <Separator />

        {/* Danger Zone */}
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full space-x-2 border-destructive text-destructive hover:bg-destructive/10" 
            onClick={handleDeleteAccount}
          >
            <Trash2 size={18} />
            <span>Delete Account</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full space-x-2" 
            onClick={handleLogout}
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <div className="space-x-2">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </div>
          <p className="mt-2">Version 1.0.0</p>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ProfilePage;
