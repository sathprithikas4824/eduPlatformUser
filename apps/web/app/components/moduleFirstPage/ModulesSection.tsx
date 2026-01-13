"use client";

import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from "../common/icons";

interface Module {
  id: string;
  title: string;
  completionPercentage: number;
}

const ModulesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const modules: Module[] = [
    { id: '1', title: 'Overview of AI', completionPercentage: 78 },
    { id: '2', title: 'Python Programming for AI', completionPercentage: 50 },
    { id: '3', title: 'Deep Learning Basics', completionPercentage: 80 },
    { id: '4', title: 'Neural Networks', completionPercentage: 45 },
    { id: '5', title: 'Computer Vision', completionPercentage: 60 },
    { id: '6', title: 'Natural Language Processing', completionPercentage: 35 },
    { id: '7', title: 'Reinforcement Learning', completionPercentage: 70 },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      const gap = 24;
      const cardsToScroll = 3;
      const scrollAmount = (cardWidth + gap) * cardsToScroll;
      
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="jakarta-font text-5xl font-bold text-center mb-16">
          Modules <span className="text-blue-500">Available</span>
        </h2>

        {/* Carousel Container */}
        <div className="relative flex items-center gap-8">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="flex-shrink-0 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-sm"
            aria-label="Scroll left"
          >
            <span className="w-5 h-5 text-gray-700 block">
              <ArrowLeft />
            </span>
          </button>

          {/* Modules Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              maxWidth: 'calc(320px * 3 + 24px * 2)'
            }}
          >
            {modules.map((module) => (
              <div
                key={module.id}
                className="flex-shrink-0 bg-white border-2 border-gray-400 rounded-2xl p-3"
                style={{ width: '320px' }}
              >
                {/* Card Content - Horizontal Layout */}
                <div className="flex gap-3">
                  {/* Left Side - Image Placeholder */}
                  <div className="flex-shrink-0 w-28 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl"></div>

                  {/* Right Side - Content */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    {/* Title */}
                    <h3 className="jakarta-font text-sm font-semibold text-gray-900 leading-tight">
                      {module.title}
                    </h3>

                    {/* Bottom Section */}
                    <div className="flex items-center justify-between gap-2">
                      {/* Progress */}
                      <div className="flex items-center gap-1.5">
                        <div className="relative w-3.5 h-3.5">
                          <svg className="w-3.5 h-3.5 transform -rotate-90">
                            <circle
                              cx="7"
                              cy="7"
                              r="6"
                              stroke="#D1D5DB"
                              strokeWidth="2"
                              fill="none"
                            />
                            <circle
                              cx="7"
                              cy="7"
                              r="6"
                              stroke="#3B82F6"
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 6}`}
                              strokeDashoffset={`${2 * Math.PI * 6 * (1 - module.completionPercentage / 100)}`}
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <span className="jakarta-font text-xs font-medium text-gray-600 whitespace-nowrap">
                          {module.completionPercentage}% Completed
                        </span>
                      </div>

                      {/* View Button */}
                      <button className="jakarta-font bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium px-4 py-1 rounded-md transition-all duration-200 hover:scale-105 whitespace-nowrap">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="flex-shrink-0 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-sm"
            aria-label="Scroll right"
          >
            <span className="w-5 h-5 text-gray-700 block">
              <ArrowRight />
            </span>
          </button>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ModulesSection;