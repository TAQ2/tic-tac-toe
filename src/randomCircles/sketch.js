const sketch = (p5, options) => {
  let undrawnCircles = [];

  let width = window.innerWidth;
  let height = window.innerHeight;
  let frameCount = 0;

  window.addEventListener("resize", () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
    width = window.innerWidth;
    height = window.innerHeight;
  });

  p5.setup = () => {
    p5.createCanvas(width, height);
  };

  p5.draw = () => {
    p5.noStroke();

    const newCircles = [];

    for (let i = 0; i < undrawnCircles.length; i++) {
      const circle = undrawnCircles[i];
      const newRatio = circle.rRatio + 0.001;
      if (newRatio > 1) {
        break;
      }

      p5.fill(...circle.colours);
      p5.ellipse(circle.width, circle.height, circle.r * newRatio);
      newCircles.push({
        width: circle.width,
        height: circle.height,
        r: circle.r,
        colours: circle.colours,
        rRatio: newRatio
      });
    }

    undrawnCircles = newCircles;

    if (frameCount % 8 === 0) {
      const circleWidth = p5.random(width);
      const circleHeight = p5.random(height);
      const ratio = 0.1;
      const r = p5.random(20, (width * height) / 5000);
      p5.ellipse(circleWidth, circleHeight, r * ratio);
      const colours = [
        p5.random(100, 255),
        p5.random(100, 255),
        p5.random(100, 255)
      ];
      p5.fill(...colours);
      undrawnCircles.push({
        r,
        rRatio: ratio,
        width: circleWidth,
        height: circleHeight,
        colours
      });
    }

    frameCount += 1;
  };
};

export default sketch;
