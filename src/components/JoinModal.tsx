
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MapPin, Clock, Users, Calendar } from 'lucide-react';
import type { EventProps } from './EventCard';

interface JoinModalProps {
  event: EventProps;
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal = ({ event, isOpen, onClose }: JoinModalProps) => {
  const handleJoin = () => {
    // In a real app, this would connect to a backend
    toast.success("You've joined the silent event!");
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join Silent Event</DialogTitle>
          <DialogDescription>
            Confirm your intention to attend this silent gathering
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          <h3 className="font-medium text-lg">{event.title}</h3>
          
          <div className="text-sm text-muted-foreground">
            {event.description || "A silent gathering to connect with others through shared mindful presence."}
          </div>
          
          <div className="space-y-2 pt-2 border-t">
            <div className="flex items-center text-sm">
              <Calendar size={16} className="mr-2" />
              <span>{event.date}</span>
            </div>
            
            <div className="flex items-center text-sm">
              <Clock size={16} className="mr-2" />
              <span>{event.time} ({event.duration} min)</span>
            </div>
            
            <div className="flex items-center text-sm">
              <MapPin size={16} className="mr-2" />
              <span>{event.location}</span>
            </div>
            
            <div className="flex items-center text-sm">
              <Users size={16} className="mr-2" />
              <span>
                {event.attendees}/{event.maxAttendees} attendees
              </span>
            </div>
          </div>
          
          <div className="bg-muted p-3 rounded-lg text-sm">
            <p className="font-medium mb-1">Guidelines:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Arrive 5 minutes early</li>
              <li>Turn off all notifications</li>
              <li>Maintain silence throughout</li>
              <li>Respect others' personal space</li>
            </ul>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button 
            onClick={handleJoin} 
            className="w-full sm:w-auto bg-silence-600 hover:bg-silence-700"
          >
            Confirm Attendance
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
