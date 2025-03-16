import React, { useEffect, useState } from 'react';
import Button from '../ui/Button'; // Importing the Button component

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10000ms]"
        style={{
          backgroundImage: 'url("/image/heroImage.jpg")',
          backgroundPosition: 'top right'
        }}
      />

      {/* Soft White Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/ to-transparent"></div>

      {/* Content Area */}
      <div className="relative z-10 w-full flex items-center justify-start px-12 md:px-20 lg:px-28">
        <div className="max-w-lg">
          {/* Hero Title with Playwrite US Trad Font and Heart Symbol */}
          <h1 className={`text-6xl md:text-7xl text-black font-[Playwrite US Trad] font-bold mb-6 leading-tight
                         transition-all duration-1000 ease-out 
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            𝔴𝔦<span className="relative">
              𝔱<span className="absolute -top-4 -right-3 text-pink-500 text-2xl animate-bounce">♥</span>
            </span>𝔥 𝔣𝔢𝔫𝔢𝔱
          </h1>

          {/* Subtitle with Playwrite US Trad Font */}
          <p className={`text-lg md:text-2xl text-gray-700 italic font-[Playwrite US Trad] leading-relaxed
                        transition-all duration-1000 delay-300 ease-out 
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            You Make Your <span className="font-semibold font-[Playwrite US Trad]">𝔖𝔭𝔢𝔠𝔦𝔞𝔩 𝔇𝔞𝔶 𝔖𝔭𝔢𝔠𝔦𝔞𝔩</span>
          </p>

          {/* Button with Glow Effect */}
          <div className={`mt-6 transition-all duration-1000 delay-600 ease-out 
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              text="Book Now" 
              onClick={ () => {location.href = "/login"}}
              className="text-lg px-8 py-3 bg-purple-400 shadow-[0_0_40px_rgba(236,72,153,0.9)] 
                         hover:shadow-[0_0_50px_rgba(236,72,153,1)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;  