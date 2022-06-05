import React, { useState, useRef, useEffect } from "react";
import Measure from "react-measure";
import { useUserMedia } from "./hooks/useUserMedia";
import { useOffsets } from "./hooks/useOffsets";
import { Canvas, Wrapper, Container, Overlay } from "./CameraStyle";
import { useRecoilValue } from "recoil";
import { facingModeState } from "./CameraControls";
import Alert from "./Alert";
import Webcam from "react-webcam";
import { isMobile } from "react-device-detect";
// Tensoflow
// eslint-disable-next-line no-unused-vars
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import { drawRect } from "../utilities";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { "facingMode:": "environment" },
};

const Camera = () => {
  const canvasRef = useRef(null);

  const webcamRef = useRef(null);
  useEffect(() => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState !== null
    )
      runCoco();
  });

  const [container, setContainer] = useState({ width: 0, height: 0 });
  const facingMode = useRecoilValue(facingModeState);

  const videoConstraints = {
    facingMode: facingMode,
  };

  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const aspectRatio = 1.586;
  const offsets = useOffsets(
    webcamRef.current && webcamRef.current.videoWidth,
    webcamRef.current && webcamRef.current.videoHeight,
    container.width,
    container.height
  );

  const handleResize = (contentRect) => {
    setContainer({
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio),
    });
  };

  // Main Function
  const runCoco = async () => {
    // Load network
    const net = await cocossd.load();
    console.log("Loading network");

    // Loop and detect hands

    setInterval(() => {
      detect();
    }, 10);

    const detect = async () => {
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState !== null
      ) {
        // Get video properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        // const videoHeight = webcamRef.current.video.videoHeight;

        // Set video width and height
        webcamRef.current.width = container.width;
        webcamRef.current.height = container.height;

        // Set canvas width and height
        canvasRef.current.width = container.width;
        canvasRef.current.height = container.height;

        // Make detections
        const detections = await net.detect(video);
        // console.log(detections);

        // Draw bounding boxes
        const ctx = canvasRef.current.getContext("2d");
        console.log(videoWidth);

        drawRect(
          detections,
          ctx,
          container.width,
          !(facingMode === "environment" && isMobile)
        );
      }
    };
  };

  if (!mediaStream) {
    return <Alert message="No camera detected" type="error" />;
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <Wrapper>
          
          <Container
            ref={measureRef}
            maxWidth={webcamRef.current && webcamRef.current.videoWidth}
            maxHeight={webcamRef.current && webcamRef.current.videoHeight}
            style={{
              height: `${container.height}px`,
            }}
          >
            <Webcam
              mirrored={facingMode === "environment" && isMobile ? false : true}
              ref={webcamRef}
              muted={true}
              playsInline
              width="100%"
              height="100%"
              style={{
                zIndex:8,
                top: `-${offsets.y}px`,
                left: `-${offsets.x}px`,
              }}
              videoConstraints={videoConstraints}
            />

            <Overlay />

            <Canvas
              ref={canvasRef}
              width="100%"
              height="100%"
              className="border-5 border-blue-500"
              style={{
                zIndex:9,
                top: `-${offsets.y}px`,
                left: `-${offsets.x}px`,
              }}
            />
          </Container>
        </Wrapper>
      )}
    </Measure>
  );
};

export default Camera;
