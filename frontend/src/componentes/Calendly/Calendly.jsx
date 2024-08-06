import React, { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    // Cargar el script de Calendly de forma asíncrona
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    // Listener para el evento de Calendly
    const handleEventScheduled = (e) => {
      if (e.data.event === "calendly.event_scheduled") {
        window.location.href = "https://offer.xpazul.com/gracias?registro=true";
      }
    };

    window.addEventListener("message", handleEventScheduled);

    return () => {
      document.head.removeChild(script);
      window.removeEventListener("message", handleEventScheduled);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget h-[1266px] lg:h-[766px]"
      data-url="https://calendly.com/acasillas-xpazul/30min"
      style={{ minWidth: "320px" }}
    ></div>
  );
};

export default Calendly;
