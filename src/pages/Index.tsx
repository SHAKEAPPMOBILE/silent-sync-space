import { MapPin, Trees, Clock, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { EventCard, EventProps } from '@/components/EventCard';
import { SilentTimer } from '@/components/SilentTimer';
import Footer from '@/components/Footer';

// Sample event data
const featuredEvents: EventProps[] = [
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
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-silence-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Silent Sync Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Connect with others through shared silence and mindfulness, fostering deeper connections without distractions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-nature-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Find Events</h3>
                <p className="text-muted-foreground">
                  Discover silent gatherings near you, from meditation sessions to nature walks.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-silence-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-silence-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Join Together</h3>
                <p className="text-muted-foreground">
                  Connect with like-minded people seeking presence and mindfulness in silence.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trees className="h-6 w-6 text-nature-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Experience Peace</h3>
                <p className="text-muted-foreground">
                  Share in the collective energy of being present together in silence.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Events Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Events</h2>
                <p className="text-muted-foreground">
                  Find a silent gathering near you to join
                </p>
              </div>
              <a href="/events" className="text-silence-700 font-medium hover:text-silence-800 transition-colors">
                View all events →
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Timer Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Practice Mindfulness</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use our timer to practice mindfulness on your own, anytime, anywhere
              </p>
            </div>
            
            <SilentTimer />
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-16 md:py-24 bg-silence-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-xl md:text-2xl font-medium mb-8">
                "Silent Sync has completely transformed how I connect with others. There's something profoundly beautiful about sharing silence with strangers that creates a deeper bond than hours of small talk ever could."
              </p>
              
              <div>
                <div className="h-12 w-12 rounded-full bg-silence-200 mx-auto mb-2 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-nature-300 to-silence-300"></div>
                </div>
                <h4 className="font-medium">Sarah K.</h4>
                <p className="text-sm text-muted-foreground">Member since 2023</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-nature-500 to-silence-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience the power of silence?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Join our community of mindful individuals seeking deeper connections through shared silence.
            </p>
            <a href="/events" className="inline-block px-8 py-3 bg-white text-silence-700 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              Find Silent Events Near You
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
