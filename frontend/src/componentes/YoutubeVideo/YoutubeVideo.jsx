import React from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
const YoutubeVideo = ({ videoId }) => {
  // Define las opciones comunes para todos los tamaños de pantalla
  const commonOpts = {
    playerVars: {
      autoplay: 0,
    },
  };

  // Define las dimensiones para pantallas pequeñas (sm:w-1/2)
  const smallScreenOpts = {
    ...commonOpts,
    height: "170",
    width: "270",
  };

  // Define las dimensiones para pantallas normales (w-3/4)
  const normalScreenOpts = {
    ...commonOpts,
    height: "350",
    width: "480",
  };
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
    <motion.div className="md:mx-auto justify-center w-3/4 sm:w-1/2"
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}>
      <YouTube videoId={videoId} opts={window.innerWidth < 640 ? smallScreenOpts : normalScreenOpts} />
    </motion.div>
  );
};

export default YoutubeVideo;
