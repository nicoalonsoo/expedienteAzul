import React from "react";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import { motion } from "framer-motion";
import "./ClientContainer.css"
const ClientContainer = () => {
  const videoIds = [
    "E8qZ5mtJnpI",
    "OGScgeUr5tE",
    "vu7mzrB3Yqc",
    "ljPuv7jZdwE",
    "vsNgjmp2uSs",
    "3r9M07-ZJYk",
  ];

  // Establece la URL de la imagen de fondo
  const backgroundImageUrl =
    "https://expedienteazul.com/financiera/wp-content/uploads/2019/01/ExA-papeles.jpg";

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
    <div
      className="flex justify-center items-center flex-wrap w-full p-4 md:max-w-[1600px] rounded-lg client-container"
      style={{
        // backgroundImage: `url(${backgroundImageUrl})`,
        // backgroundSize: "cover", // Ajusta el tamaño de la imagen de fondo según tus necesidades
        // backgroundRepeat: "no-repeat",
      }}
    >
      <motion.h1
        className="mb-8 font-catamaran text-4xl lg:text-5xl text-white"
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        Testimoniales
      </motion.h1>
      <div className=" flex flex-wrap  justify-center">
        {videoIds.map((videoId, index) => (
          <div
            key={index}
            className="mb-12 justify-center  md:w-1/3 lg:w-1/2 p-2"
          >
            <YoutubeVideo videoId={videoId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientContainer;
