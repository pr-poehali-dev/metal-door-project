import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Star } from "lucide-react";

export interface DoorProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  security: string;
  features: string[];
  isNew?: boolean;
}

const DoorCard = ({ id, name, image, price, rating, security, features, isNew }: DoorProps) => {
  return (
    <div className="door-exhibit group animate-fade-in">
      <div className="door-card group-hover:scale-[1.02] transition-transform duration-300 ease-out">
        <div className="door-card-image">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]" 
          />
          {isNew && (
            <Badge className="absolute top-4 right-4 bg-accent text-white font-semibold">
              Новинка
            </Badge>
          )}
        </div>
        <div className="door-card-content">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-metal-dark">{name}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          
          <div className="flex items-center mb-3">
            <ShieldCheck className="w-4 h-4 text-metal-accent mr-1" />
            <span className="text-sm text-metal-light">{security}</span>
          </div>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {features.slice(0, 3).map((feature, index) => (
                <Badge key={index} variant="outline" className="bg-white text-metal-dark border-metal-light/30">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="text-xl font-bold text-metal-dark">{price.toLocaleString()} ₽</div>
            <Button size="sm">Подробнее</Button>
          </div>
        </div>
      </div>
      <div className="door-exhibit-platform opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default DoorCard;
