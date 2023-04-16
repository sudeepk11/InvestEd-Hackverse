import { useState, useEffect } from 'react';

function TypingAnimation() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? '' : prev + '.'));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <h1 className='text-xl font-bold'>{dots}</h1>;
}

export default TypingAnimation;
