import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const rooms = [
    {
      name: "Семейный номер 'Алтай'",
      description: "Просторный номер с панорамным видом на горы, 2 спальни, гостиная с камином",
      capacity: "4 гостя",
      area: "65 м²",
      price: "8500",
      features: ["Камин", "Балкон", "Горный вид", "Кухня"]
    },
    {
      name: "Романтический люкс 'Белуха'",
      description: "Уютный номер для двоих с джакузи и террасой",
      capacity: "2 гостя", 
      area: "45 м²",
      price: "6500",
      features: ["Джакузи", "Терраса", "Горный вид", "Мини-бар"]
    },
    {
      name: "Стандартный номер 'Катунь'",
      description: "Комфортный номер с современными удобствами",
      capacity: "2 гостя",
      area: "28 м²", 
      price: "4500",
      features: ["Душ", "Балкон", "Wi-Fi", "Телевизор"]
    }
  ];

  const services = [
    { name: "Трансфер из аэропорта", price: "3500", icon: "Car" },
    { name: "Экскурсии по горам", price: "от 2500", icon: "Mountain" },
    { name: "Прокат лыж", price: "1200/день", icon: "Snowflake" },
    { name: "Баня на дровах", price: "2000/час", icon: "Flame" },
    { name: "Завтрак", price: "800", icon: "Coffee" },
    { name: "Ужин у камина", price: "1800", icon: "UtensilsCrossed" }
  ];

  const galleryImages = [
    { src: "img/b8b2db3c-a3e5-48e2-93ca-8449a6749de5.jpg", alt: "Коттедж Лидия" },
    { src: "img/cc32fd11-bbac-49ff-8769-1790a0f6672c.jpg", alt: "Номер отеля" },
    { src: "img/b7749bc1-2aaf-4657-b46b-675738eb9a76.jpg", alt: "Горы Алтая" }
  ];

  return (
    <div className="min-h-screen bg-secondary font-open-sans">
      {/* Header */}
      <header className="bg-primary/95 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Mountain" size={32} className="text-white" />
            <h1 className="text-2xl font-montserrat font-bold text-white">Коттедж Лидия</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#rooms" className="text-white hover:text-secondary transition-colors">Номера</a>
            <a href="#services" className="text-white hover:text-secondary transition-colors">Услуги</a>
            <a href="#gallery" className="text-white hover:text-secondary transition-colors">Фото</a>
            <a href="#booking" className="text-white hover:text-secondary transition-colors">Бронирование</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/20 to-secondary/50 pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('img/b8b2db3c-a3e5-48e2-93ca-8449a6749de5.jpg')` }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-montserrat font-bold text-primary mb-6">
            Добро пожаловать в горы Алтая
          </h2>
          <p className="text-xl md:text-2xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Уютный коттедж среди величественных гор с панорамными видами и альпийским комфортом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              onClick={() => setIsBookingOpen(true)}
            >
              <Icon name="Calendar" className="mr-2" />
              Забронировать
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Icon name="Phone" className="mr-2" />
              +7 (913) 007-07-36
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-primary mb-4">Наши номера</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждый номер оформлен в альпийском стиле с современными удобствами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 animate-scale-in">
                <div 
                  className="h-64 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url('img/cc32fd11-bbac-49ff-8769-1790a0f6672c.jpg')` }}
                />
                <CardHeader>
                  <CardTitle className="font-montserrat text-primary">{room.name}</CardTitle>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Icon name="Users" size={16} className="mr-1" />
                        {room.capacity}
                      </div>
                      <div className="flex items-center">
                        <Icon name="Square" size={16} className="mr-1" />
                        {room.area}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{room.price} ₽</div>
                      <div className="text-sm text-gray-500">за ночь</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-primary mb-4">Дополнительные услуги</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы позаботимся о вашем комфорте и незабываемом отдыхе
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={service.icon as any} size={48} className="mx-auto mb-4 text-accent" />
                  <h4 className="font-montserrat font-semibold text-lg mb-2 text-primary">
                    {service.name}
                  </h4>
                  <p className="text-2xl font-bold text-accent">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-primary mb-4">Фотогалерея</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Окунитесь в атмосферу горного уюта и красоты Алтая
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg h-64 bg-cover bg-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{ backgroundImage: `url('${image.src}')` }}
              >
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="font-montserrat text-2xl text-primary">
              Онлайн бронирование
            </DialogTitle>
            <DialogDescription>
              Выберите даты вашего пребывания
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="calendar">Календарь</TabsTrigger>
              <TabsTrigger value="details">Детали</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calendar" className="space-y-6">
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Доступно</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">Даты доступны для бронирования</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Занято</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">Даты уже забронированы</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="details" className="space-y-6">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-medium">Количество гостей</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>1 гость</option>
                    <option>2 гостя</option>
                    <option>3 гостя</option>
                    <option>4 гостя</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Тип номера</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>Семейный номер 'Алтай'</option>
                    <option>Романтический люкс 'Белуха'</option>
                    <option>Стандартный номер 'Катунь'</option>
                  </select>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90">
                <Icon name="Calendar" className="mr-2" />
                Забронировать сейчас
              </Button>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Mountain" size={24} />
                <h4 className="font-montserrat font-bold text-xl">Коттедж Лидия</h4>
              </div>
              <p className="text-white/80">
                Незабываемый отдых в сердце Алтайских гор
              </p>
            </div>
            
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (913) 007-07-36
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@cottage-lydia.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Республика Алтай, Россия
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Следите за нами</h5>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:text-secondary transition-colors" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:text-secondary transition-colors" />
                <Icon name="Youtube" size={24} className="cursor-pointer hover:text-secondary transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Коттедж Лидия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;