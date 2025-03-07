
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Advocacia de Excelência",
    subtitle: "Soluções jurídicas personalizadas para proteger seus direitos"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Experiência e Comprometimento",
    subtitle: "Uma equipe dedicada a defender seus interesses com excelência"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    title: "Consultoria Jurídica Especializada",
    subtitle: "Aconselhamento estratégico para prevenir litígios e garantir conformidade"
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>([]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadStatuses = await Promise.all(
        carouselItems.map((item) => {
          return new Promise<boolean>((resolve) => {
            const img = new Image();
            img.src = item.image;
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
          });
        })
      );
      setIsLoaded(loadStatuses);
    };
    
    preloadImages();
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === carouselItems.length - 1 ? 0 : current + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? carouselItems.length - 1 : current - 1));
  }, []);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (isLoaded.length === 0 || !isLoaded.every(Boolean)) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 bg-gray-300 rounded w-32 mb-4"></div>
          <div className="h-2 bg-gray-300 rounded w-48"></div>
        </div>
      </div>
    );
  }

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <div className="carousel-container h-full">
        {carouselItems.map((item, index) => (
          <div 
            key={item.id}
            className={`carousel-slide h-full ${index === activeIndex ? 'active' : ''}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
              style={{ 
                backgroundImage: `url(${item.image})`,
                transform: `scale(${index === activeIndex ? 1.05 : 1})`,
                transition: 'transform 6s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <div className="max-w-3xl mx-auto transform transition-all duration-700">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 tracking-tight">
                  {item.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {item.subtitle}
                </p>
                <a 
                  href="#contato" 
                  className="inline-block px-8 py-3 bg-law-accent text-white font-medium rounded hover:bg-law-accent/90 transition-all transform hover:-translate-y-1"
                >
                  Consulta Gratuita
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
