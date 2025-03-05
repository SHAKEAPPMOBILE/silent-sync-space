
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-nature-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-silence-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 inline-block px-3 py-1 rounded-full border border-border bg-background/50">
            <span className="text-sm font-medium text-silence-700">Connect through silence</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 animate-in-slow text-balance">
            Meaningful Connections 
            <span className="block"> Without Words</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl mb-8 md:mb-10 animate-in-medium text-balance">
            Join silent meditation sessions, mindful walks, or simply share quiet moments with others. Experience the power of being present together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in-fast">
            <Button className="h-12 px-8 text-base bg-nature-500 hover:bg-nature-600 transition-all duration-300">
              Find Silent Events
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" className="h-12 px-8 text-base">
              How It Works
            </Button>
          </div>
          
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="rounded-lg p-4 bg-white bg-opacity-50 backdrop-blur-sm border border-border">
              <div className="text-2xl font-bold text-silence-700 mb-1">1,200+</div>
              <div className="text-sm text-muted-foreground">Silent sessions completed</div>
            </div>
            <div className="rounded-lg p-4 bg-white bg-opacity-50 backdrop-blur-sm border border-border">
              <div className="text-2xl font-bold text-silence-700 mb-1">320+</div>
              <div className="text-sm text-muted-foreground">Cities worldwide</div>
            </div>
            <div className="rounded-lg p-4 bg-white bg-opacity-50 backdrop-blur-sm border border-border">
              <div className="text-2xl font-bold text-silence-700 mb-1">15,000+</div>
              <div className="text-sm text-muted-foreground">Minutes in silence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
