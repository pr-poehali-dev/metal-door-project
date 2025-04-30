import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/hero-section";
import DoorCard from "@/components/door-card";
import { ArrowRight, ShieldCheck, Settings, Award } from "lucide-react";
import { Link } from "react-router-dom";

const doors = [
  {
    id: "door1",
    name: "Сталь-М 70",
    image: "https://images.unsplash.com/photo-1606761508878-4002c9f2ad9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: 39990,
    rating: 4.8,
    security: "Высокий уровень защиты",
    features: ["Шумоизоляция", "Терморазрыв", "2 замка"],
    isNew: true
  },
  {
    id: "door2",
    name: "Гранд Престиж",
    image: "https://images.unsplash.com/photo-1588464083059-6a5139d06712?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: 52000,
    rating: 4.9,
    security: "Премиум защита",
    features: ["Взломостойкость", "Звукоизоляция", "Терморазрыв"]
  },
  {
    id: "door3",
    name: "Эталон 90",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: 45500,
    rating: 4.7,
    security: "Улучшенная защита",
    features: ["Противопожарная", "Звукоизоляция", "Мультизамковая"]
  }
];

const features = [
  {
    icon: <ShieldCheck className="w-14 h-14 text-metal-accent" />,
    title: "Защита от взлома",
    description: "Многоуровневая система защиты от всех видов взлома гарантирует безопасность вашего дома"
  },
  {
    icon: <Settings className="w-14 h-14 text-metal-accent" />,
    title: "Индивидуальные решения",
    description: "Изготовление дверей по индивидуальным размерам с учетом всех пожеланий клиента"
  },
  {
    icon: <Award className="w-14 h-14 text-metal-accent" />,
    title: "Гарантия качества",
    description: "Мы используем только высококачественные материалы и фурнитуру от проверенных поставщиков"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-metal-dark mb-2">Популярные модели</h2>
            <p className="text-metal-light max-w-2xl">Наши клиенты чаще всего выбирают эти модели за их надежность и стильный дизайн</p>
          </div>
          <Link to="/catalog">
            <Button variant="outline" className="mt-4 md:mt-0">
              Весь каталог
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doors.map(door => (
            <DoorCard key={door.id} {...door} />
          ))}
        </div>
      </div>
      
      <div className="bg-metal-dark/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-metal-dark mb-12">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-metal-dark mb-3">{feature.title}</h3>
                <p className="text-metal-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <footer className="bg-metal-dark text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center space-x-2">
              <ShieldCheck size={24} className="text-metal-accent" />
              <span className="text-xl font-semibold">СтальДверь</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/70 mb-2">© 2025 СтальДверь. Все права защищены.</p>
              <p className="text-white/70">г. Москва, ул. Металлургов, 42</p>
              <p className="text-white mt-2 font-semibold">+7 (900) 123-45-67</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
