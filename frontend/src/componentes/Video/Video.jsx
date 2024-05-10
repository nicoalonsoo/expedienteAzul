import React, {useEffect, useState, useRef } from "react";
import "./Video.css";
function Video() {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // useEffect(() => {
  //   const muteTimeout = setTimeout(() => {
  //     playVideo();
  //   }, 1500);

  //   return () => clearTimeout(muteTimeout);
  // }, []);

  return (
    <div className="youtube-div flex justify-center py-4">
      <iframe ref={videoRef} width="560" height="315" src="https://www.youtube.com/embed/XmH2BZxp_Fg?si=91aUD2FBU2YgkUKz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
}

export default Video;