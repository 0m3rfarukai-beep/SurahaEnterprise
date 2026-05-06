import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useMotionValue, useTransform } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      // Extract numbers only
      const end = parseInt(value.toString().replace(/,/g, ''), 10);
      if (start === end) return;
      
      const duration = 2000; // ms
      const incrementTime = Math.abs(Math.floor(duration / end));
      
      let timer = setInterval(() => {
        start += 1;
        setDisplayValue(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime < 10 ? 10 : incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  // For very large numbers like 45K or 24/7, maybe we just pass strings, but the prompt asked for "Animated counters for stats: 50+ Projects, 3 Packages, 24/7 Support".
  // Let's implement a simpler motion-value based counter if it's purely numeric.
  // Above is a naive setInterval. A better way with framer-motion:
  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

// We will export a simpler version that takes a final string but handles numeric animation.
export const MotionCounter = ({ end, suffix="" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const animation = count.animate(count, end, { duration: 2 });
      // wait, `count.animate` is not right for useMotionValue. We use animate(count, end)
      // Since it's easier, let's stick to simple state interpolation.
    }
  }, [inView, end, count]);
  
  // Let's rewrite the exported default safely:
  return null;
}

// Actually, let's just write a robust pure React counter.
export default function Counter({ end, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    if (inView) {
      animationFrameId = window.requestAnimationFrame(step);
    }

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, inView]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}
