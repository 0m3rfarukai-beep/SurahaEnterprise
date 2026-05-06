import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(position);
  };

  const handleTouchDrag = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const position = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(position);
  };

  return (
    <div className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">See The Difference</h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            Drag the slider to see how we transform clunky, outdated interfaces into modern, high-converting digital experiences.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative group">
          
          <div 
            ref={containerRef}
            className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl shadow-blue-900/10 border-4 border-white"
            onMouseMove={handleDrag}
            onTouchMove={handleTouchDrag}
          >
            {/* AFTER IMAGE (Bottom Layer) */}
            <div className="absolute inset-0 bg-slate-900 flex items-center justify-center p-8">
              <div className="w-full h-full border border-slate-700 rounded-2xl bg-slate-950 p-6 flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div className="w-32 h-6 bg-blue-600 rounded-md" />
                  <div className="flex gap-4">
                    <div className="w-16 h-4 bg-slate-800 rounded-full" />
                    <div className="w-16 h-4 bg-slate-800 rounded-full" />
                    <div className="w-24 h-8 bg-blue-500 rounded-full -mt-2" />
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-6 pt-4">
                  <div className="col-span-2 space-y-4">
                    <div className="w-3/4 h-12 bg-white rounded-xl" />
                    <div className="w-full h-4 bg-slate-800 rounded-full" />
                    <div className="w-5/6 h-4 bg-slate-800 rounded-full" />
                    <div className="w-1/2 h-12 bg-blue-600 rounded-xl mt-8" />
                  </div>
                  <div className="col-span-1 bg-slate-800 rounded-2xl" />
                </div>
              </div>
              <div className="absolute bottom-6 right-8 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg uppercase tracking-wider text-sm shadow-xl shadow-blue-900/50">
                After: Suraha
              </div>
            </div>

            {/* BEFORE IMAGE (Top Layer, Masked) */}
            <div 
              className="absolute inset-0 bg-slate-200 flex items-center justify-center p-8 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="w-full h-full border-2 border-slate-400 rounded-none bg-slate-300 p-6 flex flex-col gap-2">
                <div className="flex justify-between items-center pb-4 border-b-2 border-slate-400">
                  <div className="w-32 h-6 bg-slate-500" />
                  <div className="flex gap-4">
                    <div className="w-16 h-4 bg-slate-400" />
                    <div className="w-16 h-4 bg-slate-400" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                  <div className="w-1/2 h-8 bg-slate-500" />
                  <div className="w-3/4 h-4 bg-slate-400" />
                  <div className="w-1/4 h-10 bg-slate-600 mt-4" />
                </div>
              </div>
              <div className="absolute bottom-6 left-8 px-4 py-2 bg-slate-600 text-white font-bold rounded-none uppercase tracking-wider text-sm shadow-md">
                Before: Outdated
              </div>
            </div>

            {/* SLIDER HANDLE */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-200">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-slate-400 rounded-full" />
                  <div className="w-0.5 h-4 bg-slate-400 rounded-full" />
                  <div className="w-0.5 h-4 bg-slate-400 rounded-full" />
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
