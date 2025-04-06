
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import ProfileForm from '@/components/profile/ProfileForm';

const ProfileSetupPage: React.FC = () => {
  return (
    <AppLayout gradient="cream">
      <div className="min-h-screen flex flex-col">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold">Complete Your Profile</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Help others get to know you better
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center px-6 pb-12">
          <div className="w-full max-w-md glass-card p-6 rounded-2xl shadow-card">
            <ProfileForm />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfileSetupPage;
