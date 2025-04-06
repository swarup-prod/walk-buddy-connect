
import React from 'react';
import FloatingNavBar from './FloatingNavBar';

// Import icons from lucide-react
import { Home, Users, Calendar, MessageSquare, User } from 'lucide-react';

type AppLayoutProps = {
  children: React.ReactNode;
  gradient?: 'purple' | 'blue' | 'cream' | 'blend';
};

const AppLayout: React.FC<AppLayoutProps> = ({ children, gradient = 'purple' }) => {
  const navItems = [
    { 
      icon: <Home className="w-5 h-5" />, 
      activeIcon: <Home className="w-5 h-5 fill-primary" />,
      label: 'Home', 
      path: '/' 
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      activeIcon: <Users className="w-5 h-5 fill-primary" />,
      label: 'Buddies', 
      path: '/buddies' 
    },
    { 
      icon: <Calendar className="w-5 h-5" />, 
      activeIcon: <Calendar className="w-5 h-5 fill-primary" />,
      label: 'Walks', 
      path: '/walks' 
    },
    { 
      icon: <MessageSquare className="w-5 h-5" />, 
      activeIcon: <MessageSquare className="w-5 h-5 fill-primary" />,
      label: 'Chat', 
      path: '/chat' 
    },
    { 
      icon: <User className="w-5 h-5" />, 
      activeIcon: <User className="w-5 h-5 fill-primary" />,
      label: 'Profile', 
      path: '/profile' 
    },
  ];
  
  const gradientClasses = {
    purple: 'bg-gradient-purple',
    blue: 'bg-gradient-blue',
    cream: 'bg-gradient-cream',
    blend: 'bg-gradient-blend',
  };
  
  return (
    <div className={`min-h-screen ${gradientClasses[gradient]}`}>
      {/* Content Area */}
      <main className="pb-24">
        {children}
      </main>
      
      {/* Floating Bottom Navigation - Now consistent across all pages */}
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
        <FloatingNavBar items={navItems} />
      </div>
    </div>
  );
};

export default AppLayout;
