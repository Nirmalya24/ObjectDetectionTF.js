// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
// TODO: Import required model
// eg. import * as tfmodel from "@tensorflow-models/tfmodel";
import * as cocossd from "@tensorflow-models/coco-ssd"; // pre trained object detection model
import Webcam from "react-webcam";
// Import drawing utility
import { drawRect } from "../utilities";

function WebcamComponent() {
  useEffect(() => {
    runCoco();
  }, []);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    // Load network
    const net = await cocossd.load();

    // Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);

    const detect = async (net) => {
      // Check if data is available
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState !== null
      ) {
        // Get video properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        // Set video width and height
        webcamRef.current.width = videoWidth;
        webcamRef.current.height = videoHeight;

        // Set canvas width and height
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // Make detections
        const detections = await net.detect(video);
        console.log(detections);

        // Draw bounding boxes
        const ctx = canvasRef.current.getContext("2d");
        drawRect(detections, ctx);
      }
    };
  };

  return (
    <div>
      <Webcam
        ref={webcamRef}
        muted={true}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 8,
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
}

export default WebcamComponent;
