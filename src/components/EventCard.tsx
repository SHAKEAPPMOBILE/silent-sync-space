import { useState } from 'react';
import { MapPin, Clock, Users, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { JoinModal } from './JoinModal';
import { ChatModal } from './ChatModal';
import { EventType, getEventTypeIcon } from '@/utils/eventTypes';
import { toast } from 'sonner';

export interface EventProps {
  id: string;
  title: string;
  type: EventType;
  date: string;
  time: string;
  duration: number;
  location: string;
  attendees: number;
  maxAttendees: number;
  description: string;
  image?: string;
}

export const EventCard = ({ event }: { event: EventProps }) => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const EventTypeIcon = getEventTypeIcon(event.type);
  
  const handleJoin = () => {
    // For demo purposes, we'll simulate finding another person
    // In a real app, this would check the database for matches
    const hasMatch = Math.random() > 0.5;
    
    if (hasMatch) {
      toast.success("Someone else is interested in this activity!");
      setIsChatModalOpen(true);
    } else {
      setIsJoinModalOpen(true);
    }
  };

  // Extract city from location
  const city = event.location.split(',')[1]?.trim() || event.location;
  
  return (
    <>
      <Card className="overflow-hidden hover-lift">
        <div className="relative h-40 bg-muted">
          {event.image ? (
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-nature-200 to-silence-200 flex items-center justify-center">
              <EventTypeIcon className="h-16 w-16 text-nature-500/50" />
            </div>
          )}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm py-1 px-2 rounded-full text-xs font-medium flex items-center gap-1">
            <EventTypeIcon className="h-3 w-3" />
            {event.type}
          </div>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-balance">{event.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-2 pb-2">
          <div className="flex items-center text-sm">
            <Calendar size={14} className="mr-2 text-muted-foreground" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Clock size={14} className="mr-2 text-muted-foreground" />
            <span>{event.time} ({event.duration} min)</span>
          </div>
          
          <div className="flex items-center text-sm">
            <MapPin size={14} className="mr-2 text-muted-foreground" />
            <span className="truncate">{event.location}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Users size={14} className="mr-2 text-muted-foreground" />
            <span>
              {event.attendees}/{event.maxAttendees} attendees
            </span>
          </div>
        </CardContent>
        
        <CardFooter className="pt-2">
          <Button 
            className="w-full bg-silence-600 hover:bg-silence-700 transition-all duration-300"
            onClick={handleJoin}
          >
            Join Event
          </Button>
        </CardFooter>
      </Card>
      
      <JoinModal 
        event={event}
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />
      
      <ChatModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
        chatPartner="Anonymous User"
        eventType={event.type}
        city={city}
      />
    </>
  );
};
