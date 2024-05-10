import React, { useEffect } from 'react';

const Calendly = () => {
  useEffect(() => {
    // Cargar el script de Calendly de forma asíncrona
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/acasillas-xpazul/30min?month=2024-05" style={{ minWidth: '320px', height: '700px' }}></div>
  );
};

export default Calendly;

