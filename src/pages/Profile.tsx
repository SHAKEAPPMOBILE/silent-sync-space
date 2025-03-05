
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { toast } from "sonner";
import { EventProps } from '@/components/EventCard';
import { Clock, MapPin, Users, Calendar } from 'lucide-react';

// Mock user data
const userData = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  location: 'San Francisco, CA',
  bio: 'Mindfulness practitioner for 5 years. I enjoy silent walks in nature and group meditation sessions.',
  joinedDate: 'June 2023',
  silentHours: 42,
  eventsAttended: 15,
  profilePicture: '',
};

// Mock upcoming events for the user
const userUpcomingEvents: EventProps[] = [
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

// Mock past events for the user
const userPastEvents: EventProps[] = [
  {
    id: '7',
    title: 'Sunrise Yoga & Meditation',
    type: 'Yoga',
    date: 'Mon, 15 Jul',
    time: '06:00 AM',
    duration: 60,
    location: 'Beach Park, Miami',
    attendees: 12,
    maxAttendees: 15,
    description: 'Start your day with gentle yoga followed by a silent meditation as the sun rises.',
  },
  {
    id: '8',
    title: 'Silent Reading Club',
    type: 'Social',
    date: 'Sat, 8 Jul',
    time: '02:00 PM',
    duration: 90,
    location: 'Public Library, New York',
    attendees: 8,
    maxAttendees: 20,
    description: 'Bring a book and enjoy reading in the company of others in a peaceful, silent space.',
  },
  {
    id: '9',
    title: 'Urban Silent Retreat',
    type: 'Retreat',
    date: 'Sun, 1 Jul',
    time: '10:00 AM',
    duration: 240,
    location: 'Mindfulness Center, Chicago',
    attendees: 20,
    maxAttendees: 20,
    description: 'A half-day urban retreat with alternating silent sitting and walking meditation.',
  },
];

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name,
    location: userData.location,
    bio: userData.bio,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSaveProfile = () => {
    // In a real app, this would save to a backend
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Profile Overview */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="h-24 w-24 rounded-full bg-silence-100 overflow-hidden flex items-center justify-center text-3xl font-light text-silence-500">
                  {userData.profilePicture ? (
                    <img 
                      src={userData.profilePicture} 
                      alt="Profile" 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    userData.name.charAt(0)
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold">{userData.name}</h1>
                      <p className="text-muted-foreground">{userData.location}</p>
                    </div>
                    
                    <div>
                      {!isEditing ? (
                        <Button 
                          variant="outline"
                          onClick={() => setIsEditing(true)}
                        >
                          Edit Profile
                        </Button>
                      ) : (
                        <div className="flex gap-2">
                          <Button 
                            variant="outline"
                            onClick={() => setIsEditing(false)}
                          >
                            Cancel
                          </Button>
                          <Button 
                            className="bg-nature-500 hover:bg-nature-600"
                            onClick={handleSaveProfile}
                          >
                            Save
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {!isEditing ? (
                    <p className="mt-4 text-foreground/90">{userData.bio}</p>
                  ) : (
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Location</label>
                        <Input 
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Bio</label>
                        <Textarea 
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          rows={4}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="font-bold text-2xl text-silence-700 mb-1">{userData.eventsAttended}</div>
                    <div className="text-sm text-muted-foreground">Events Attended</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="font-bold text-2xl text-silence-700 mb-1">{userData.silentHours}</div>
                    <div className="text-sm text-muted-foreground">Hours in Silence</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="font-bold text-2xl text-silence-700 mb-1">{userData.joinedDate}</div>
                    <div className="text-sm text-muted-foreground">Member Since</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Events Tabs */}
            <Tabs defaultValue="upcoming">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming">
                {userUpcomingEvents.length > 0 ? (
                  <div className="space-y-4">
                    {userUpcomingEvents.map((event) => (
                      <Card key={event.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                              <h3 className="font-medium text-xl mb-1">{event.title}</h3>
                              <div className="text-sm text-foreground/80">{event.description}</div>
                              
                              <div className="mt-4 grid grid-cols-2 md:flex md:items-center gap-x-4 gap-y-2">
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Calendar size={14} className="mr-1" />
                                  {event.date}
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Clock size={14} className="mr-1" />
                                  {event.time}
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <MapPin size={14} className="mr-1" />
                                  {event.location}
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Users size={14} className="mr-1" />
                                  {event.attendees}/{event.maxAttendees}
                                </div>
                              </div>
                            </div>
                            
                            <Button variant="outline">Cancel RSVP</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-muted/30 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">No upcoming events</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      You haven't RSVP'd to any upcoming silent events yet
                    </p>
                    <Button className="bg-silence-600 hover:bg-silence-700">
                      Browse Events
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="past">
                <div className="space-y-4">
                  {userPastEvents.map((event) => (
                    <Card key={event.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="font-medium text-xl mb-1">{event.title}</h3>
                            <div className="text-sm text-foreground/80">{event.description}</div>
                            
                            <div className="mt-4 grid grid-cols-2 md:flex md:items-center gap-x-4 gap-y-2">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar size={14} className="mr-1" />
                                {event.date}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock size={14} className="mr-1" />
                                {event.time}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin size={14} className="mr-1" />
                                {event.location}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Users size={14} className="mr-1" />
                                {event.attendees}/{event.maxAttendees}
                              </div>
                            </div>
                          </div>
                          
                          <Button variant="outline">View Event</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
