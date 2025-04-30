import { Link } from "react-router-dom";
import { ShieldIcon, HomeIcon, Grid3X3Icon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ShieldIcon size={24} className="text-metal-accent" />
          <span className="text-xl font-semibold text-metal-dark">СтальДверь</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-metal-dark hover:text-metal-accent transition-colors duration-200 flex items-center gap-1">
            <HomeIcon size={16} />
            <span>Главная</span>
          </Link>
          <Link to="/catalog" className="text-metal-dark hover:text-metal-accent transition-colors duration-200 flex items-center gap-1">
            <Grid3X3Icon size={16} />
            <span>Каталог</span>
          </Link>
          <Link to="/contact" className="text-metal-dark hover:text-metal-accent transition-colors duration-200 flex items-center gap-1">
            <PhoneIcon size={16} />
            <span>Контакты</span>
          </Link>
        </div>
        
        <Button variant="outline" className="hidden md:flex">
          <PhoneIcon size={16} className="mr-2" />
          <span>+7 (900) 123-45-67</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
