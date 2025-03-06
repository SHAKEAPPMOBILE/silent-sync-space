
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock } from 'lucide-react';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  chatPartner: string;
  eventType: string;
  city: string;
}

export const ChatModal = ({ isOpen, onClose, chatPartner, eventType, city }: ChatModalProps) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ sender: string; content: string; timestamp: Date }[]>([]);
  
  // Calculate remaining time (24 hours from now for demo)
  const endTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const remainingTime = Math.max(0, endTime.getTime() - new Date().getTime());
  const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages([
      ...messages,
      { sender: 'You', content: message, timestamp: new Date() }
    ]);
    setMessage('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Chat with {chatPartner}</DialogTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              Chat expires in {remainingHours}h {remainingMinutes}m
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            {eventType} in {city}
          </div>
        </DialogHeader>

        <ScrollArea className="h-[300px] p-4 border rounded-md">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}
            >
              <div
                className={`inline-block max-w-[80%] rounded-lg px-4 py-2 ${
                  msg.sender === 'You'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <div className="text-sm">{msg.content}</div>
                <div className="text-xs opacity-70 mt-1">
                  {msg.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>

        <div className="flex gap-2 mt-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
