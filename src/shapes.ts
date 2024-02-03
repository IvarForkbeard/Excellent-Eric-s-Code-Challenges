interface Point {
  x: number;
  y: number;
}

interface Color {
  r: number;
  g: number;
  b: number;
}

abstract class Shape {
  constructor(protected readonly pos: Point, protected readonly color: Color) {}

  draw(c: CanvasRenderingContext2D): void {
    const {
      color: { r, g, b },
    } = this;
    c.fillStyle = `rgb(${r},${g},${b})`;

    this.drawShape(c);
  }

  protected abstract drawShape(c: CanvasRenderingContext2D): void;
}

export class Circle extends Shape {
  constructor(pos: Point, color: Color, private readonly radius: number) {
    super(pos, color);
  }

  drawShape(c: CanvasRenderingContext2D): void {
    const {
      pos: { x, y },
      radius,
    } = this;
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.fill();
  }
}

export class Rectangle extends Shape {
  constructor(pos: Point, color: Color, private readonly dimensions: Point) {
    super(pos, color);
  }

  drawShape(c: CanvasRenderingContext2D): void {
    const {
      pos: { x, y },
      dimensions: { x: width, y: height },
    } = this;
    c.beginPath();
    c.rect(x, y, width, height);
    c.fill();
  }
}

export class Square extends Rectangle {
  constructor(pos: Point, color: Color, size: number) {
    super(pos, color, { x: size, y: size });
  }
}
