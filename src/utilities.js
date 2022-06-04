export const drawRect = (detections, ctx, videoWidth, mirrored) => {
  detections.forEach((detection) => {
    // Get prediction result
    let [x, y, width, height] = detection.bbox;
    const label = detection.class;
    if (mirrored) {
      x = Math.abs(videoWidth - x - width);
    }

    // Styling
    const color = "blue";
    ctx.strokeStyle = color;
    ctx.font = "16px Arial";
    ctx.fillStyle = color;
    ctx.lineWidth = 2;

    // Draw bounding box and label
    ctx.strokeRect(x, y, width, height);
    ctx.fillText(label, x, y - 10);
  });
};
