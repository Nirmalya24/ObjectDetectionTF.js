export const drawRect = (detections, ctx) => {
  detections.forEach((detection) => {
    // Get prediction result
    const [x, y, width, height] = detection.bbox;
    const label = detection.class;

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
