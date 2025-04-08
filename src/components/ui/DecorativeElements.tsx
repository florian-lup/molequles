'use client';

// UI component for decorative elements used in the Hero section
export const DecorativeElements = () => (
  <>
    {/* Gradient backgrounds */}
    <div className="absolute top-[15%] right-[8%] w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/10 blur-2xl"></div>
    <div className="absolute bottom-[40%] left-[5%] w-28 sm:w-36 md:w-48 h-28 sm:h-36 md:h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
    <div className="absolute top-[60%] left-[45%] w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl"></div>
    
    {/* Animated dots */}
    <div className="absolute top-1/3 left-1/4 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 rounded-full bg-pink-400/50 animate-pulse"></div>
    <div className="absolute top-2/3 right-1/4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-indigo-400/50 animate-pulse"></div>
    <div className="absolute top-1/2 left-1/2 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full bg-cyan-400/50 animate-pulse"></div>
    <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-purple-400/50 animate-pulse-slow"></div>
    <div className="absolute bottom-1/3 left-1/3 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-indigo-300/50 animate-pulse-slow"></div>
    <div className="absolute top-2/5 left-[5%] sm:left-16 w-2 h-2 rounded-full bg-pink-300/50 animate-pulse"></div>
    <div className="absolute bottom-1/4 right-[5%] sm:right-16 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-cyan-300/50 animate-pulse-slow"></div>
    <div className="absolute top-3/4 left-[5%] sm:left-10 w-2 h-2 rounded-full bg-indigo-400/50 animate-pulse"></div>
    <div className="absolute top-16 right-1/4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
  </>
); 