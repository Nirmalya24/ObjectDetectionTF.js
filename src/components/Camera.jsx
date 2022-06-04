import React, { useState, useRef } from "react";
import Measure from "react-measure";
import { useUserMedia } from "./hooks/useUserMedia";
import { useCardRatio } from "./hooks/useCardRatio";
import { useOffsets } from "./hooks/useOffsets";
import { Canvas, Wrapper, Container, Overlay, Video } from "./CameraStyle";
import Alert from "./Alert";
import Webcam from "react-webcam";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { "facingMode:": "environment" },
};

const Camera = () => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  const [container, setContainer] = useState({ width: 0, height: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const [aspectRatio, calculateRatio] = useCardRatio(1.586);
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height
  );

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
    console.log(videoRef.current);
  }

  function handleResize(contentRect) {
    setContainer({
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio),
    });
  }

  function handleCanPlay() {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    setIsVideoPlaying(true);
    videoRef.current.play();
  }

  if (!mediaStream) {
    return <Alert message="No camera detected" type="error" />;
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <Wrapper>
          <Container
            ref={measureRef}
            maxWidth={videoRef.current && videoRef.current.videoWidth}
            maxHeight={videoRef.current && videoRef.current.videoHeight}
            style={{
              height: `${container.height}px`,
            }}
          >
            <Webcam
              mirrored={true}
              ref={videoRef}
              muted={true}
              onCanPlay={handleCanPlay}
              playsInline
              width="100%"
              height="100%"
              style={{
                top: `-${offsets.y}px`,
                left: `-${offsets.x}px`,
              }}
            />

            <Overlay hidden={!isVideoPlaying} />

            <Canvas
              ref={canvasRef}
              width={container.width}
              height={container.height}
            />
          </Container>
        </Wrapper>
      )}
    </Measure>
  );
};

export default Camera;
