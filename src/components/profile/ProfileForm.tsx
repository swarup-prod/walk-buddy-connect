
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { User, Camera } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const INTERESTS = [
  'Morning Walks', 'Evening Walks', 'Nature Trails', 'City Walks', 
  'Fitness Walking', 'Dog Walking', 'Photography Walks', 'Hiking'
];

const ProfileForm: React.FC = () => {
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    gender: '',
    age: '',
    interests: [] as string[],
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (value: string) => {
    setProfile(prev => ({ ...prev, gender: value }));
  };

  const toggleInterest = (interest: string) => {
    setProfile(prev => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile.name) {
      toast({
        title: "Name Required",
        description: "Please enter your name to continue",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // In a real app, this would save the profile to your backend
    setTimeout(() => {
      toast({
        title: "Profile Updated",
        description: "Your profile has been saved successfully",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 w-full max-w-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center relative">
            <User size={40} className="text-muted-foreground" />
            <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full">
              <Camera size={16} />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Tap to add profile photo</p>
        </div>

        {/* Basic Info */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name*
            </label>
            <Input
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="bio" className="text-sm font-medium">
              Bio
            </label>
            <Textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              placeholder="Tell others a bit about yourself"
              className="resize-none"
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Gender (Optional)</label>
            <RadioGroup value={profile.gender} onValueChange={handleGenderChange}>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="age" className="text-sm font-medium">
              Age (Optional)
            </label>
            <Input
              id="age"
              name="age"
              type="number"
              value={profile.age}
              onChange={handleChange}
              min={13}
              placeholder="Your age"
            />
          </div>
        </div>

        {/* Interests */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Walking Interests (Select all that apply)
          </label>
          <div className="grid grid-cols-2 gap-2">
            {INTERESTS.map(interest => (
              <div 
                key={interest}
                className={`
                  border rounded-md p-3 cursor-pointer transition-colors
                  ${profile.interests.includes(interest) 
                    ? 'bg-primary/10 border-primary' 
                    : 'border-input hover:border-primary/50'}
                `}
                onClick={() => toggleInterest(interest)}
              >
                <span className="text-sm">{interest}</span>
              </div>
            ))}
          </div>
        </div>
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Profile"}
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
