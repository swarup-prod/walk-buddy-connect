
import React from 'react';
import { useParams } from 'react-router-dom';
import ChatInterface from '@/components/chat/ChatInterface';

// Mock data - would come from API in real app
const BUDDIES = {
  '1': { id: '1', name: 'Priya Singh', avatar: '' },
  '2': { id: '2', name: 'Amit Kumar', avatar: '' },
};

const ChatPage: React.FC = () => {
  const { buddyId } = useParams<{ buddyId: string }>();
  
  // Get buddy details from mock data (in a real app, fetch from API)
  const buddy = buddyId && BUDDIES[buddyId] 
    ? BUDDIES[buddyId] 
    : { id: '0', name: 'Unknown Buddy', avatar: '' };

  return (
    <ChatInterface 
      buddyId={buddy.id} 
      buddyName={buddy.name} 
      buddyAvatar={buddy.avatar}
    />
  );
};

export default ChatPage;
