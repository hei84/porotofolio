import { useEffect, useMemo, useState } from 'react';
import { experience, services, skills } from '../data/content';
import { fetchPortfolioContent, hasApi } from '../services/api';

const defaultContent = {
  services,
  experience,
  skills,
  stats: [],
  availability: null
};

const usePortfolioContent = () => {
  const [content, setContent] = useState(defaultContent);
  const [status, setStatus] = useState({ loading: hasApi, error: null });

  useEffect(() => {
    if (!hasApi) {
      // No backend configured (e.g. Netlify static deploy) – keep defaults
      setStatus({ loading: false, error: null });
      return undefined;
    }

    let mounted = true;

    const loadContent = async () => {
      try {
        const remoteContent = await fetchPortfolioContent();

        if (!mounted) return;

        setContent(prev => ({
          ...prev,
          ...remoteContent
        }));
        setStatus({ loading: false, error: null });
      } catch (error) {
        console.error('Failed to load portfolio content', error);
        if (!mounted) return;
        setStatus({
          loading: false,
          error: 'Unable to fetch latest portfolio content. Showing defaults.'
        });
      }
    };

    loadContent();

    return () => {
      mounted = false;
    };
  }, []);

  const enrichedContent = useMemo(
    () => ({
      ...content,
      services: content.services?.length ? content.services : services,
      experience: content.experience?.length ? content.experience : experience,
      skills: content.skills?.core?.length ? content.skills : skills
    }),
    [content]
  );

  return { content: enrichedContent, ...status };
};

export default usePortfolioContent;

