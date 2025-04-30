import Navbar from "@/components/ui/navbar";
import DoorCard from "@/components/door-card";
import FilterSidebar from "@/components/filter-sidebar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid3X3, LayoutList, SlidersHorizontal } from "lucide-react";

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
    id: "burkovsky1",
    name: "Burkovsky Diamond",
    image: "https://cdn.poehali.dev/files/7565b991-72b4-427e-a85f-04c472b44574.jpg",
    price: 145000,
    rating: 5.0,
    security: "Высшая степень защиты",
    features: ["Геометрический дизайн", "Дерево премиум", "Цифровой замок"],
    isNew: true
  },
  {
    id: "door3",
    name: "Эталон 90",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: 45500,
    rating: 4.7,
    security: "Улучшенная защита",
    features: ["Противопожарная", "Звукоизоляция", "Мультизамковая"]
  },
  {
    id: "door4",
    name: "Комфорт Плюс",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: 37500,
    rating: 4.6,
    security: "Стандартная защита",
    features: ["Утепленная", "Усиленный каркас", "Влагостойкая"]
  },
  {
    id: "burkovsky2",
    name: "Burkovsky Geometric",
    image: "https://cdn.poehali.dev/files/7565b991-72b4-427e-a85f-04c472b44574.jpg",
    price: 128000,
    rating: 4.9,
    security: "Премиальная защита",
    features: ["Деревянные панели", "3D дизайн", "Биометрический доступ"],
    isNew: true
  },
  {
    id: "door5",
    name: "Максимум Про",
    image: "https://images.unsplash.com/photo-1591499879361-31effcdea5b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: 68000,
    rating: 5.0,
    security: "Максимальная защита",
    features: ["Сейфовые замки", "Бронированная", "Сигнализация"],
    isNew: true
  },
  {
    id: "door6",
    name: "Лофт Стиль",
    image: "https://images.unsplash.com/photo-1611416517780-eff3a13b0359?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: 43200,
    rating: 4.5,
    security: "Повышенная защита",
    features: ["Дизайнерская", "Повышенная прочность", "Шумоизоляция"]
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-sm rounded-xl p-8 mb-10">
          <h1 className="text-4xl font-bold text-metal-dark mb-3">Каталог металлических дверей</h1>
          <p className="text-metal-light text-lg max-w-3xl mb-6">
            Выберите идеальную дверь из нашей коллекции премиальных металлических дверей, 
            разработанных с учетом высочайших стандартов безопасности и эстетики.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              Входные двери
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Противопожарные
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Технические
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Для квартиры
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Для дома
            </Button>
            <Button variant="outline" size="sm" className="rounded-full bg-accent/10 text-accent border-accent/30">
              Дизайнерские
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4 xl:w-1/5">
            <FilterSidebar />
          </div>
          
          <div className="lg:w-3/4 xl:w-4/5">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <p className="text-metal-light">Найдено: <span className="font-medium text-metal-dark">8 моделей</span></p>
              </div>
              
              <div className="flex gap-3 items-center">
                <div className="hidden sm:flex items-center gap-2 mr-2">
                  <SlidersHorizontal className="h-4 w-4 text-metal-light" />
                  <span className="text-sm text-metal-light">Сортировать:</span>
                </div>
                
                <select className="text-sm border rounded-md px-2 py-1 text-metal-dark bg-white">
                  <option>По популярности</option>
                  <option>По цене (низкая-высокая)</option>
                  <option>По цене (высокая-низкая)</option>
                  <option>По новизне</option>
                </select>
                
                <Tabs defaultValue="grid" className="w-auto">
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="grid" className="h-8 w-8 p-0">
                      <Grid3X3 className="h-4 w-4" />
                    </TabsTrigger>
                    <TabsTrigger value="list" className="h-8 w-8 p-0">
                      <LayoutList className="h-4 w-4" />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {doors.map(door => (
                <DoorCard key={door.id} {...door} />
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="mx-auto">
                Показать еще
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-metal-dark text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">© 2025 СтальДверь. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
