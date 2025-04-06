
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavItem = {
  path: string;
  label: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
};

const FloatingNavBar: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div className="nav-pill flex items-center justify-between px-2 py-1 rounded-full shadow-soft">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all ${
                isActive 
                  ? 'text-primary bg-white shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center mb-1">
                {isActive ? item.activeIcon : item.icon}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingNavBar;
