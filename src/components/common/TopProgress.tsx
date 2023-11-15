import React, { useEffect } from 'react';

export const TopProgress = () => {
  const [width, setWidth] = React.useState(0);

  useEffect(() => {
    const widthCalc = () => {
      const newWidth = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setWidth(newWidth);
    };
    widthCalc();

    window.addEventListener('scroll', widthCalc);

    return () => window.removeEventListener('scroll', widthCalc);
  }, []);

  return (
    <div
      className="fixed h-2 left-0 right-0 top-0 bg-blue-700 z-50 animate-opacity"
      style={{
        width: `${width}%`,
      }}
    >
      &nbsp;
    </div>
  );
};
