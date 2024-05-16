import React from "react";
import { motion } from "framer-motion";
const Benefits = ({ imageUrl, text }) => {
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
    <motion.div
      className=" justify-center items-start text-center overflow-hidden"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <img className="mx-auto w-24 mb-6" src={imageUrl} alt="Imagen" />
      
      <p
        className="mx-auto font-roboto text-xl md:max-w-[300px]"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </motion.div>
  );
};

export default Benefits;
