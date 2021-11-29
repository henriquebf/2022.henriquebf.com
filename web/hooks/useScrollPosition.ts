import { useState, useEffect, useCallback } from 'react';

export const useScrollPosition = () => {
  const [position, setPosition] = useState(0);

  const _updateScroll = useCallback(() => {
    setPosition(window.scrollY);
  }, []);

  const _onScroll = useCallback(() => {
    window.requestAnimationFrame(_updateScroll);
  }, [_updateScroll]);

  useEffect(() => {
    window.addEventListener('scroll', _onScroll);
    return () => {
      window.removeEventListener('scroll', _onScroll);
    };
  }, [_onScroll]);

  return position;
};
