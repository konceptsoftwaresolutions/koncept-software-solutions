import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // How much has been scrolled from the top
      const windowHeight = window.innerHeight; // Height of the viewport
      const documentHeight = document.documentElement.scrollHeight; // Total height of the document

      const totalScrollable = documentHeight - windowHeight;
      const scrolledPercentage = (scrollTop / totalScrollable) * 100;

      setScrollPercentage(scrolledPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPercentage?.toFixed(2);
};

export default useScroll;
