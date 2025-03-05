
import { useState } from 'react';
import { EventCard, EventProps } from '@/components/EventCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Search, MapPin, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

// Sample events data
const allEvents: EventProps[] = [
  {
    id: '1',
    title: 'Morning Meditation Circle',
    type: 'Meditation',
    date: 'Tomorrow',
    time: '07:00 AM',
    duration: 30,
    location: 'Central Park, New York',
    attendees: 8,
    maxAttendees: 15,
    description: 'Start your day with a peaceful group meditation surrounded by nature. No experience necessary.',
  },
  {
    id: '2',
    title: 'Mindful Sunset Walk',
    type: 'Walking',
    date: 'Sat, 20 Jul',
    time: '06:30 PM',
    duration: 45,
    location: 'Golden Gate Park, San Francisco',
    attendees: 12,
    maxAttendees: 20,
    description: 'Experience the beauty of sunset through a silent, contemplative walk through the park.',
  },
  {
    id: '3',
    title: 'Tea & Silence Gathering',
    type: 'Social',
    date: 'Sun, 21 Jul',
    time: '10:00 AM',
    duration: 60,
    location: 'Serenity Cafe, Boston',
    attendees: 5,
    maxAttendees: 10,
    description: 'Share the experience of mindful tea drinking in complete silence. Tea provided.',
  },
  {
    id: '4',
    title: 'Forest Bathing Experience',
    type: 'Nature',
    date: 'Mon, 22 Jul',
    time: '09:00 AM',
    duration: 90,
    location: 'Redwood Forest, California',
    attendees: 6,
    maxAttendees: 12,
    description: 'Immerse yourself in the healing atmosphere of the forest through mindful presence.',
  },
  {
    id: '5',
    title: 'Silent Co-Working Session',
    type: 'Work',
    date: 'Tue, 23 Jul',
    time: '01:00 PM',
    duration: 120,
    location: 'Mindful Hub, Chicago',
    attendees: 10,
    maxAttendees: 20,
    description: 'Boost your productivity in a shared silent workspace. Bring your own laptop.',
  },
  {
    id: '6',
    title: 'Candlelight Meditation',
    type: 'Meditation',
    date: 'Wed, 24 Jul',
    time: '08:00 PM',
    duration: 45,
    location: 'Zen Center, Seattle',
    attendees: 15,
    maxAttendees: 25,
    description: 'A peaceful evening meditation by candlelight with gentle guidance for beginners.',
  },
];

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [eventType, setEventType] = useState('all');
  const [location, setLocation] = useState('');
  
  // Filter events based on search, type, and location
  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = eventType === 'all' || event.type === eventType;
    const matchesLocation = !location || event.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesType && matchesLocation;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Silent Events</h1>
            <p className="text-muted-foreground">
              Discover mindful gatherings in your area and connect with others through shared silence
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search events..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Location..."
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <Select value={eventType} onValueChange={setEventType}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Event type" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Meditation">Meditation</SelectItem>
                  <SelectItem value="Walking">Walking</SelectItem>
                  <SelectItem value="Social">Social</SelectItem>
                  <SelectItem value="Nature">Nature</SelectItem>
                  <SelectItem value="Work">Work</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-block p-4 rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No events found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We couldn't find any events matching your search criteria. Try adjusting your filters or creating your own event.
              </p>
              <Button className="mt-6 bg-nature-500 hover:bg-nature-600">
                Create an Event
              </Button>
            </div>
          )}
          
          {/* Create Event CTA */}
          {filteredEvents.length > 0 && (
            <div className="mt-16 text-center">
              <h3 className="text-xl font-medium mb-2">Can't find what you're looking for?</h3>
              <p className="text-muted-foreground mb-6">
                Create your own silent event and invite others to join
              </p>
              <Button className="bg-nature-500 hover:bg-nature-600">
                Create an Event
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
