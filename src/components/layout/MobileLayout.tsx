
import React from 'react';
import { Home, Users, Calendar, MessageSquare, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import FloatingNavBar from './FloatingNavBar';

const MobileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Create navigation items in the same format as AppLayout
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
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Main Content */}
      <main className="flex-1 pb-16">
        {children}
      </main>
      
      {/* Floating Bottom Navigation - now consistent with AppLayout */}
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
        <FloatingNavBar items={navItems} />
      </div>
    </div>
  );
};

export default MobileLayout;
