import React from "react";
import { motion } from "framer-motion";
import compu2 from "../../multimedia/compu2.png"
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
      <div className="max-w-[400px] sm:max-w-[700px] p-4 mb-4 sm:mb-0 mr-0 sm:mr-12">
        <motion.h1
          className="text-2xl font-catamaran text-[#0055b8] font-bold mb-2 text-balance"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          xpAzul es más que un gestor documental.
          <span className="text-[#40b4e5]"> Automatizamos </span>y <span className="text-[#40b4e5]"> digitalizamos  </span>todo tu proceso de onboarding.
        </motion.h1>
        <motion.p
          className="text-md text-gray-800 mb-4"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          La automatización y digitalización de tus expedientes financieros no
          solo mejora la eficiencia documental, sino que transforma todo el
          proceso desde la originación. Esto significa capturar prospectos
          valiosos las 24/7 sin perder oportunidades. Integramos
          rápidamente todos los requisitos, validamos y resguardamos la
          información para decisiones precisas y otorgamiento de financiamiento
          seguro, sin riesgo de fraudes ni multas. Nuestro sistema garantiza
          auditorias eficientes con trazabilidad completa y datos inalterables,
          sin interrumpir la operatividad. Además, agilizamos la formalización
          de expedientes con velocidad y seguridad. ¿Listo para optimizar la
          eficiencia y seguridad de tus expedientes financieros? <span className="font-bold">Contáctanos hoy
          para una demostración gratuita.</span>
        </motion.p>
      </div>
      <div className="ml-0 sm:ml-20">
        <motion.img
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          src={compu2}
          alt="ImagenAutomatizacion"
          className=" h-[280px]  rounded-md"
        />
      </div>
    </div>
  );
};

export default TextAndImage;
