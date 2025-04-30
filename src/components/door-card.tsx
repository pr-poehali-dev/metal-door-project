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
  // Определяем, является ли дверь премиальной моделью Burkovsky
  const isPremium = name.includes("Burkovsky");

  return (
    <div className={`door-exhibit group animate-fade-in ${isPremium ? 'premium-door' : ''}`}>
      <div className={`door-card group-hover:scale-[1.02] transition-transform duration-300 ease-out ${isPremium ? 'border-2 border-amber-100/20' : ''}`}>
        <div className="door-card-image">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]" 
          />
          {isNew && (
            <Badge className={`absolute top-4 right-4 font-semibold ${isPremium ? 'bg-amber-500 text-white' : 'bg-accent text-white'}`}>
              {isPremium ? 'Премиум' : 'Новинка'}
            </Badge>
          )}
          
          {isPremium && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <span className="text-sm font-medium">Геометрический дизайн • Премиум материалы</span>
              </div>
            </div>
          )}
        </div>
        <div className={`door-card-content ${isPremium ? 'bg-gradient-to-r from-stone-50 to-amber-50/30' : ''}`}>
          <div className="flex justify-between items-start mb-2">
            <h3 className={`text-xl font-semibold ${isPremium ? 'text-amber-900' : 'text-metal-dark'}`}>{name}</h3>
            <div className="flex items-center">
              <Star className={`w-4 h-4 ${isPremium ? 'fill-amber-400 text-amber-400' : 'fill-yellow-400 text-yellow-400'} mr-1`} />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          
          <div className="flex items-center mb-3">
            <ShieldCheck className={`w-4 h-4 ${isPremium ? 'text-amber-700' : 'text-metal-accent'} mr-1`} />
            <span className="text-sm text-metal-light">{security}</span>
          </div>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {features.slice(0, 3).map((feature, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className={`
                    ${isPremium 
                      ? 'bg-white/80 text-amber-900 border-amber-200/50' 
                      : 'bg-white text-metal-dark border-metal-light/30'}
                  `}
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className={`text-xl font-bold ${isPremium ? 'text-amber-900' : 'text-metal-dark'}`}>
              {price.toLocaleString()} ₽
            </div>
            <Button 
              size="sm" 
              className={isPremium ? 'bg-amber-800 hover:bg-amber-700' : ''}
            >
              Подробнее
            </Button>
          </div>
        </div>
      </div>
      <div className={`door-exhibit-platform opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isPremium ? 'bg-gradient-to-r from-amber-100/20 to-amber-50/10' : ''
      }`}></div>
    </div>
  );
};

export default DoorCard;
