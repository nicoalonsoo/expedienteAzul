import React from "react";
import { motion } from "framer-motion";
const TextAndImage = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between mb-20 mt-20">
      <div className="max-w-[400px] sm:max-w-[600px] p-4 mb-4 sm:mb-0 mr-0 sm:mr-12">
        <motion.h1
          className="text-4xl font-catamaran font-bold mb-2 text-balance"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
         Xp azul no solo te ayuda en lo documental, sino que  
          <span className="text-custom-blue"> automatiza </span>todo el proceso.
        </motion.h1>
        <motion.p
          className="text-md text-gray-800 mb-4"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          La automatización total de expedientes aumenta considerablemente la eficiencia documental. Sin embargo, no se limita únicamente a lo documental, sino que abarca todo el proceso. Ayuda a validar y resguardar información para que se pueda tomar la decisión más precisa sobre si otorgar o no un financiamiento sin riesgos. Por eso, nos referimos a la automatización de la originación (captación de prospectos las 24 horas del día, los 7 días de la semana, y filtrado), integración (de todos los requisitos, formatos y documentos), validación (identidad, datos fiscales, etc., todo sin información alterada), resguardo (expedientes inalterables para futuras auditorías) y formalización (generación de contratos o formatos a partir de datos obtenidos de otros documentos, facilitación de firmas y datos que optimizan el proceso para una mejor decisión de aprobación de un financiamiento). 
        </motion.p>
      </div>
      <div className="ml-0 sm:ml-20">
        <motion.img
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          src="https://expedienteazul.com/financiera/wp-content/uploads/2022/06/ExA-Vfuncionalidades.jpg"
          alt="ImagenAutomatizacion"
          className="w-[300px] h-[300px] max-w-full rounded-md"
      
        />
      </div>
    </div>
  );
};

export default TextAndImage;
