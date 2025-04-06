
import React from 'react';
import ProfileForm from '@/components/profile/ProfileForm';

const ProfileSetupPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Complete Your Profile</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Help others get to know you better
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 pb-12">
        <ProfileForm />
      </div>
    </div>
  );
};

export default ProfileSetupPage;
