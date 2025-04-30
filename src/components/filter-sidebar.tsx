import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { 
  FilterIcon, 
  CheckCircle, 
  Wallet, 
  Shield,
  Palette,
  X
} from "lucide-react";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([25000, 150000]);
  const [securityLevels, setSecurityLevels] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [styles, setStyles] = useState<string[]>([]);
  
  const securityOptions = [
    { id: "basic", label: "Базовый" },
    { id: "advanced", label: "Продвинутый" },
    { id: "premium", label: "Премиум" }
  ];
  
  const featureOptions = [
    { id: "warmnoise", label: "Шумо/теплоизоляция" },
    { id: "firproof", label: "Противопожарная" },
    { id: "multilock", label: "Многозамковая" },
    { id: "biometric", label: "Биометрический доступ" }
  ];
  
  const styleOptions = [
    { id: "classic", label: "Классический" },
    { id: "modern", label: "Современный" },
    { id: "geometric", label: "Геометрический" },
    { id: "wooden", label: "С деревянными панелями" }
  ];
  
  const toggleSecurityLevel = (id: string) => {
    setSecurityLevels(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const toggleFeature = (id: string) => {
    setFeatures(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const toggleStyle = (id: string) => {
    setStyles(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const resetFilters = () => {
    setPriceRange([25000, 150000]);
    setSecurityLevels([]);
    setFeatures([]);
    setStyles([]);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FilterIcon className="w-5 h-5 text-metal-accent" />
          <h2 className="text-lg font-semibold text-metal-dark">Фильтры</h2>
        </div>
        {(securityLevels.length > 0 || features.length > 0 || styles.length > 0 || priceRange[0] !== 25000 || priceRange[1] !== 150000) && (
          <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-sm">
            <X className="w-4 h-4 mr-1" />
            Сбросить
          </Button>
        )}
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Wallet className="w-4 h-4 text-metal-accent" />
            <h3 className="font-medium text-metal-dark">Цена, ₽</h3>
          </div>
          <Slider
            defaultValue={[25000, 150000]}
            max={150000}
            min={15000}
            step={1000}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-metal-light">
            <span>{priceRange[0].toLocaleString()} ₽</span>
            <span>{priceRange[1].toLocaleString()} ₽</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-metal-accent" />
            <h3 className="font-medium text-metal-dark">Уровень защиты</h3>
          </div>
          <div className="space-y-2">
            {securityOptions.map(option => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`security-${option.id}`} 
                  checked={securityLevels.includes(option.id)}
                  onCheckedChange={() => toggleSecurityLevel(option.id)} 
                />
                <Label htmlFor={`security-${option.id}`} className="text-metal-dark cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-4 h-4 text-metal-accent" />
            <h3 className="font-medium text-metal-dark">Стиль</h3>
          </div>
          <div className="space-y-2">
            {styleOptions.map(option => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`style-${option.id}`} 
                  checked={styles.includes(option.id)}
                  onCheckedChange={() => toggleStyle(option.id)} 
                />
                <Label htmlFor={`style-${option.id}`} className="text-metal-dark cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-4 h-4 text-metal-accent" />
            <h3 className="font-medium text-metal-dark">Особенности</h3>
          </div>
          <div className="space-y-2">
            {featureOptions.map(option => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`feature-${option.id}`} 
                  checked={features.includes(option.id)}
                  onCheckedChange={() => toggleFeature(option.id)} 
                />
                <Label htmlFor={`feature-${option.id}`} className="text-metal-dark cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
