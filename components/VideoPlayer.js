import React, { useRef, useState } from 'react';
import {FaWindowClose} from 'react-icons/fa' 

const VideoPlayer = ({ videoUrl, setPlay }) => {
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        controls
        className="w-full h-auto"
        onClick={toggleFullScreen}
        autoPlay
      >
        <source src={videoUrl} type="video/mp4" />
        {/* <source src='http://dev.saitnewmedia.ca/~gcheng/video/index.html?movie=de.mp4' type="video/mp4" /> */}
        {/* Add other video formats if needed */}
      </video>
      <button
        className="absolute top-4 right-4 p-1 rounded-md bg-p1/70 text-p2"
        onClick={()=> {setPlay(false)}}
      >
        <FaWindowClose className='w-[20px] h-[20px]'/>
      </button>
    </div>
  );
};

export default VideoPlayer;
