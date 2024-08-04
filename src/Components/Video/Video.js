import React from "react";
import v1 from '../images/v1.mp4'
function Video() {
  return (
    <div className="relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
        <p className="text-lg">Your captivating message here.</p>
      </div>
    </div>
  );
}

export default Video;
