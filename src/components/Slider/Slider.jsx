'use client';
import Image from "next/image";

import { useState, useEffect } from 'react';

import img1 from '../../../public/slider/1.png';
import img2 from '../../../public/slider/2.png';
import img3 from '../../../public/slider/3.png';
import img4 from '../../../public/slider/4.png';

const slides = [
    {
        id: 1,
        title: "Неразрушающий контроль",
        description: "Неразрушающий контроль технических устройств различного назначения.",
        image: img1.src
    },
    {
        id: 2,
        title: "Техническое диагностирование",
        description: "Техническое диагностирование технических устройств, применяемых на опасных производственных объектах.",
        image: img2.src
    },
    {
        id: 3,
        title: "Расчеты ресурса",
        description: "Расчеты ресурса дальнейшей эксплуатации технологического оборудования.",
        image: img3.src
    },
    {
        id: 4,
        title: "Качество услуг",
        description: "Качественное оказание услуг.",
        image: img4.src
    }
];

export default function Slider() {

    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const goToSlide = (index) => {
        setCurrent(index);
    };

useEffect(() => {
    if (isHovered) return;
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
}, [current, isHovered]);

return (
    <div 
        className="relative w-full max-w-5xl mx-auto h-75 sm:h-87.5 md:h-100 overflow-hidden rounded-xl shadow-2xl group bg-gray-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
    <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
    >
        {
            slides.map((slide) => (
            <div key={slide.id} className="min-w-full h-full relative flex items-end">
                {/* Картинка */}
                <Image  src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover " fill/>
                
                {/* Затемнение для читаемости */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                {/* Контент */}
                <div className="relative z-10 p-6 sm:p-8 md:p-10 text-white w-full md:w-3/4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 uppercase tracking-wide border-l-4 border-(--color-theme) pl-3 sm:pl-4 drop-shadow-md">
                    {slide.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-sm max-w-2xl">
                    {slide.description}
                </p>
                </div>
            </div>
        ))}
    </div>

    {/* Стрелки */}
    <button 
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/10 hover:bg-(--color-theme) backdrop-blur-md border border-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-20"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
    </button>

    <button 
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/10 hover:bg-(--color-theme) backdrop-blur-md border border-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-20"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </button>

    {/* Точки */}
    <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
        <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
            current === index ? 'w-8 bg-(--color-theme)' : 'w-3 bg-white hover:bg-white/50'
            }`}
        />
        ))}
    </div>
    </div>
);
}