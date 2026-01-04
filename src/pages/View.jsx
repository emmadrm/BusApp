//import React, { useRef, useEffect, useState } from "react";
//import "aframe";
//import RoofVideo from '../assets/videos/roof-360.mp4';
//import DriverVideo from '../assets/videos/Driver.mp4';
/*
function View(){
    const videoRef = useRef(null);
    const [currentVideo, setCurrentVideo] = useState('roof');

    useEffect(() => {
        const videoElement = document.getElementById(`${currentVideo}360`);
        if (videoElement) {
            videoElement.play().catch(err => console.log('Autoplay failed:', err));
        }
    }, [currentVideo]);

    const handleVideoChange = (videoType) => {
        setCurrentVideo(videoType);
    };

    return (<div id="view">
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <button 
                className={`btn ${currentVideo === 'roof' ? 'btn-primary' : 'btn-secondary'} me-2`}
                onClick={() => handleVideoChange('roof')}
            >
                VR Θέα Οροφής
            </button>
            <button 
                className={`btn ${currentVideo === 'driver' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleVideoChange('driver')}
            >
                VR Θέα Οδηγού
            </button>
        </div>
        <a-scene embedded vr-mode-ui="enabled: true">
      <a-assets>
        <video
          ref={videoRef}
          id="roof360"
          src={RoofVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          id="driver360"
          src={DriverVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </a-assets>

      <a-videosphere
        src={`#${currentVideo}360`}
        rotation="0 0 0"
      />
    </a-scene>
    </div>);
}

export default View;
*/
