import { useEffect, useState } from 'react';

const useScrollSpy = (sectionIds = [], options = {}) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  const { rootMargin = '-45% 0px -45% 0px', threshold = 0 } = options;

  useEffect(() => {
    if (!sectionIds.length) {
      return undefined;
    }

    const observerOptions = {
      root: null,
      rootMargin,
      threshold
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin, threshold]);

  return activeId;
};

export default useScrollSpy;

