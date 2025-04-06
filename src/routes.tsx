
import { Navigate, RouteObject } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfileSetupPage from './pages/ProfileSetupPage';
import BuddiesPage from './pages/BuddiesPage';
import WalksPage from './pages/WalksPage';
import ChatListPage from './pages/ChatListPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import WalkSchedulePage from './pages/WalkSchedulePage';
import NotFoundPage from './pages/NotFoundPage';
import PolicyPage from './pages/PolicyPage';

// For demo purposes, we're not implementing actual authentication checks
// In a real app, you would check if the user is authenticated
const isAuthenticated = () => {
  // This would check if user is logged in
  return true;
};

// Protected route component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/profile-setup',
    element: (
      <ProtectedRoute>
        <ProfileSetupPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/buddies',
    element: (
      <ProtectedRoute>
        <BuddiesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/walks',
    element: (
      <ProtectedRoute>
        <WalksPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/walks/schedule',
    element: (
      <ProtectedRoute>
        <WalkSchedulePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/chat',
    element: (
      <ProtectedRoute>
        <ChatListPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/chat/:buddyId',
    element: (
      <ProtectedRoute>
        <ChatPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/privacy',
    element: <PolicyPage />,
  },
  {
    path: '/terms',
    element: <PolicyPage />,
  },
  {
    path: '/policy/:policyType',
    element: <PolicyPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
