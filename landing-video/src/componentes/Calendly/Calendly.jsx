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
      // Limpiar el script cuando el componente se desmonte
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/nicoalonso99-na/30min?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
  );
};

export default Calendly;

