import React, { useState, useEffect } from "react";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "现代化开发体验",
    description: "使用最新的React 19特性，享受极致的开发体验",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "高性能构建工具",
    description: "基于Vite的快速开发和构建体验",
    imageUrl:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "类型安全",
    description: "TypeScript提供的类型安全和开发效率",
    imageUrl:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop",
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length,
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg mb-12">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <img
            key={item.id}
            className="w-full flex-shrink-0 relative"
            src={item.imageUrl}
            alt=""
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        >
          ❯
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">
          {carouselItems[currentSlide].title}
        </h3>
        <p className="text-sm">{carouselItems[currentSlide].description}</p>
      </div>
    </div>
  );
};

export default Carousel;
