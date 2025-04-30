import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Check } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1558404979-e2eb59327832?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Металлические двери высшего качества
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl">
            Безопасность вашего дома начинается с двери. Мы производим надежные стальные двери с современным дизайном.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-metal-accent hover:bg-metal-accent/90">
              <ShieldCheck className="mr-2 h-5 w-5" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Lock className="mr-2 h-5 w-5" />
              Консультация
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Безопасность", desc: "Многослойная защита от взлома" },
              { icon: <Lock />, title: "Надежность", desc: "Срок службы более 20 лет" },
              { icon: <Check />, title: "Гарантия", desc: "5 лет гарантии на все двери" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="flex-shrink-0 mr-3 bg-metal-accent/20 p-2 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
