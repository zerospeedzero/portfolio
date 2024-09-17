import React, { useRef, useState, useEffect } from 'react';
import { FaWindowClose, FaExpand, FaCompress } from 'react-icons/fa';

const VideoPlayer = ({ videoUrl, setPlay }) => {
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setPlay(false);
    }
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative max-w-4xl w-full">
        <video
          ref={videoRef}
          className="w-full h-auto"
          onClick={handleVideoClick}
          controls
          autoPlay
          preload="auto"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className="absolute top-20 right-12 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-opacity"
          onClick={() => setPlay(false)}
        >
          <FaWindowClose className="w-6 h-6" />
        </button>
        <button
          className="absolute top-32 right-12 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-opacity"
          onClick={toggleFullScreen}
        >
          {isFullScreen ? (
            <FaCompress className="w-6 h-6" />
          ) : (
            <FaExpand className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;