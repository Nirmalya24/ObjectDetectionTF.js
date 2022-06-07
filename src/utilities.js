export const drawRect = (detections, ctx) => {
  detections.forEach((detection) => {
    // Get prediction result
    let [x, y, width, height] = detection.bbox;
    const label = detection.class;
    const roundScore = detection.score.toFixed(2) * 100;

    // Styling
    const color = "red";
    ctx.strokeStyle = color;
    ctx.font = "16px Arial";
    ctx.fillStyle = color;
    ctx.lineWidth = 2;

    // Draw bounding box and label
    ctx.strokeRect(x, y, width, height);
    // Reset context for rendering label
    // ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillText(label + " " + roundScore + "% Accurate", x, y - 10);
  });
};
