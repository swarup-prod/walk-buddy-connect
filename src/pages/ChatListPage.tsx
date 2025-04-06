
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock data - would come from API in real app
const CHATS = [
  {
    id: '1',
    buddy: { name: 'Priya Singh', avatar: '' },
    lastMessage: 'See you tomorrow at the park!',
    timestamp: '10:24 AM',
    unread: 2,
  },
  {
    id: '2',
    buddy: { name: 'Amit Kumar', avatar: '' },
    lastMessage: 'Would you like to go for a walk this weekend?',
    timestamp: 'Yesterday',
    unread: 0,
  },
];

const ChatListPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Messages</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Chat with your walking buddies
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search conversations..."
            className="pl-9"
          />
        </div>

        {/* Chat List */}
        <div className="space-y-1">
          {CHATS.length > 0 ? (
            CHATS.map(chat => (
              <div 
                key={chat.id}
                className="flex items-center p-3 rounded-lg hover:bg-muted/50 cursor-pointer"
                onClick={() => navigate(`/chat/${chat.id}`)}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={chat.buddy.avatar} />
                    <AvatarFallback>{chat.buddy.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {chat.unread > 0 && (
                    <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {chat.unread}
                    </div>
                  )}
                </div>
                
                <div className="ml-3 flex-1 overflow-hidden">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{chat.buddy.name}</h3>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock size={12} className="mr-1" />
                      {chat.timestamp}
                    </span>
                  </div>
                  <p className={`text-sm truncate ${chat.unread > 0 ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto text-muted-foreground"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium">No Messages Yet</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Start a conversation with your walking buddies
              </p>
            </div>
          )}
        </div>

        {/* Auto-deletion Notice */}
        <div className="text-xs text-center text-muted-foreground p-3 bg-muted rounded-lg">
          <p>For your privacy, all messages are automatically deleted after 7 days</p>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ChatListPage;
