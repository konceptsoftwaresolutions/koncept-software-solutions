import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedCount = ({ targetNumber, duration = 2, className="" }) => {
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();
  const countRef = useRef(null);
  const observerRef = useRef(null); // Avoid re-instantiating IntersectionObserver

  // IntersectionObserver to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Disconnect after first intersection
        }
      },
      { threshold: 0.5 } // Trigger when 50% is visible
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Animation logic when in view
  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1 });
      
      // Smooth count up logic
      const start = 0;
      const end = targetNumber;
      const incrementDuration = duration * 1000; // Total duration in milliseconds

      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const current = Math.min(
          Math.floor((progress / incrementDuration) * (end - start)),
          end
        );
        
        if (current <= end) {
          countRef.current.innerHTML = current;
          if (current < end) {
            requestAnimationFrame(step);
          }
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, targetNumber, duration, controls]);

  return (
    <motion.div
      ref={countRef}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {0} {/* Initial value */}
    </motion.div>
  );
};

export default AnimatedCount;
