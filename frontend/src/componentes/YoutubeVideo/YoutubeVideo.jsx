import React from "react";
import YouTube from "react-youtube";

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
    height: "300",
    width: "430",
  };

  return (
    <div className="w-3/4 sm:w-1/2">
      <YouTube videoId={videoId} opts={window.innerWidth < 640 ? smallScreenOpts : normalScreenOpts} />
    </div>
  );
};

export default YoutubeVideo;
