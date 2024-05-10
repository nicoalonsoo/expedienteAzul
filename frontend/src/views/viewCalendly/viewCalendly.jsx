import React, { useEffect } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Calendly from "../../componentes/Calendly/Calendly";
const ViewCalendly = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-top bg-fixed h-full"
      style={{
        backgroundImage:
          "url(https://expedienteazul.com/financiera/wp-content/uploads/2018/05/fondo.jpg)",
      }}
    >
      <Header />
      <div className="text-center py-4 max-w-[1223px] mx-auto">
        <h1 className="font-open-sans text-2xl md:text-5xl font-extrabold mb-2 mx-4 md:mx-0">
          Estas a un paso de tu Sesión...
        </h1>
        <h3 className="text-lg md:text-2xl mb-2 mx-6 my-2 md:my-0 md:mx-0">
        Aceleramos significativamente el proceso de seguimiento, validación de requisitos y dictamen final, reduciendo las fricciones con el cliente, el desorden y la dificultad en el seguimiento.
        </h3>
        <div className="h-[866px] lg:h-auto">
        <Calendly />
        </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default ViewCalendly;
