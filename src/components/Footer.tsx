
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 bg-nature-500 rounded-full"></div>
                <div className="absolute inset-0 bg-silence-500 rounded-full mix-blend-multiply opacity-70"></div>
              </div>
              <span className="text-xl font-medium">Silent Sync</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Connect with others through shared silence. Join mindful experiences that foster connection without words.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="text-muted-foreground hover:text-foreground transition-colors">
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Join Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Silent Sync. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
