
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Image, Info } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'buddy';
  timestamp: Date;
  read?: boolean;
}

interface ChatInterfaceProps {
  buddyId: string;
  buddyName: string;
  buddyAvatar?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  buddyId,
  buddyName,
  buddyAvatar,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi there! Would you like to go for a walk later today?',
      sender: 'buddy',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      read: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, message]);
    setNewMessage('');
    
    // Simulate buddy response after 2 seconds
    setTimeout(() => {
      const buddyReply: Message = {
        id: (Date.now() + 1).toString(),
        text: "That sounds great! Where would you like to meet?",
        sender: 'buddy',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, buddyReply]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] border rounded-md overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b bg-background flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={buddyAvatar} />
            <AvatarFallback>{buddyName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{buddyName}</h3>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Info size={20} />
        </Button>
      </div>
      
      {/* Chat Messages Area */}
      <ScrollArea className="flex-1 p-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
            <p>No messages yet. Say hello!</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-xs text-center text-muted-foreground">
              <p>Messages will be automatically deleted after 7 days</p>
            </div>
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div
                    className={`text-xs mt-1 ${
                      message.sender === 'user'
                        ? 'text-primary-foreground/80'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {formatTime(message.timestamp)}
                    {message.sender === 'user' && message.read && (
                      <span className="ml-1">✓</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
      
      {/* Message Input */}
      <div className="p-3 border-t bg-background">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Image size={20} />
          </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button 
            size="icon" 
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
