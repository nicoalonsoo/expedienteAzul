import React from 'react'
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
      <motion.div className="mx-auto text-center overflow-hidden"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      >
        <img className="mx-auto mb-6" src={imageUrl} alt="Imagen" />
        <p className='mx-auto font-catamaran text-2xl px-4 md:max-w-[300px]'>{text}</p>
      </motion.div>
    );
}

export default Benefits
