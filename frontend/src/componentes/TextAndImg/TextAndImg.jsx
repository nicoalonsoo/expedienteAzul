import React from "react";

const TextAndImage = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between mb-20 mt-20">
      <div className="max-w-[400px] sm:max-w-[600px] p-4 mb-4 sm:mb-0 mr-0 sm:mr-12">
        <h1 className="text-4xl font-catamaran font-bold mb-2">
          Déjanos ser tu mejor aliado en el {" "}
          <span className="text-custom-blue">crecimiento</span>
        </h1>
        <p className="text-sm text-gray-800 mb-4">
          Aceleramos significativamente el proceso de seguimiento, validación de
          requisitos y dictamen final, reduciendo las fricciones con el cliente,
          el desorden y la dificultad en el seguimiento..
        </p>
      </div>
      <div className="ml-0 sm:ml-20">
        <img
          src="https://expedienteazul.com/financiera/wp-content/uploads/2022/06/ExA-Vfuncionalidades.jpg"
          alt="ImagenAutomatizacion"
          className="w-[270px] h-[270px] max-w-full"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default TextAndImage;
