//Video component
import React from 'react';

const VideoComponent = ({className}) => {
    return (
        <video
            autoPlay
            playsInline
            muted
            loop
            className={className}>
            <source
                src="/videos/Haikyuu-Final.mp4"
                type="video/mp4"
            />
        </video>
    );
};

export default VideoComponent;