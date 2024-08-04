import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import PlayIcon from "@mui/icons-material/PlayArrow"; // Using Material-UI play icon
import CloseIcon from "@mui/icons-material/Close"; // Using Material-UI close icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Using Material-UI back icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Using Material-UI forward icon
import image1 from "../images/i2.jpg";
import image2 from "../images/i3.jpg";
import image3 from "../images/i4.jpg";
import image4 from "../images/i5.jpg";
import v1 from "../images/v1.mp4";
import v2 from "../images/v2.mp4";
import v3 from "../images/v3.mp4";

const services = [
  {
    videoSrc: v1,
    thumbnail: image1,
    title: "Service 1",
    description: "Description of Service 1",
  },
  {
    videoSrc: v2,
    thumbnail: image2,
    title: "Service 2",
    description: "Description of Service 2",
  },
  {
    videoSrc: v3,
    thumbnail: image3,
    title: "Service 3",
    description: "Description of Service 3",
  },
  {
    videoSrc: v3,
    thumbnail: image4,
    title: "Service 4",
    description: "Description of Service 4",
  },
];

const VideoPlayer = ({ videoSrc, onClose, onPrev, onNext }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative flex items-center justify-center">
        <button
          onClick={onPrev}
          className="absolute left-4 bg-white rounded-full p-2 text-black z-50"
        >
          <ArrowBackIcon />
        </button>
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-auto max-h-screen max-w-screen"
          style={{ maxWidth: "90vw", maxHeight: "90vh" }}
        ></video>
        <button
          onClick={onNext}
          className="absolute right-4 bg-white rounded-full p-2 text-black z-50"
        >
          <ArrowForwardIcon />
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white rounded-full p-2 text-black z-50"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

const Ourwork = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setPlayingVideo(services[newIndex].videoSrc);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === services.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setPlayingVideo(services[newIndex].videoSrc);
  };

  return (
    <div className="py-10  px-5">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold">Our Work</h1>
        <div className="mt-2 h-1 w-20 bg-yellow-500 mx-auto"></div>
      </div>
      <div className="flex gap-5 flex-wrap justify-center">
        {services.map((service, index) => (
          <div key={index} className="w-[400px]">
            <Paper sx={{ paddingX: 3, paddingY: 3, borderRadius: 5 }}>
              <div className="relative bg-black">
                <img
                  src={service.thumbnail}
                  alt={service.title}
                  className="w-full h-auto"
                />
                <button
                  onClick={() => {
                    setPlayingVideo(service.videoSrc);
                    setCurrentIndex(index);
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                >
                  <PlayIcon className="text-white" style={{ fontSize: 50 }} />
                </button>
              </div>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontStyle: "italic",
                  fontSize: "18px",
                  lineHeight: "24px",
                  paddingY: 2,
                }}
              >
                {service.description}
              </Typography>
            </Paper>
          </div>
        ))}
        {playingVideo && (
          <VideoPlayer
            videoSrc={playingVideo}
            onClose={() => setPlayingVideo(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
};

export default Ourwork;
