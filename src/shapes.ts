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
      color,
      color: { r, g, b },
    } = this;

    c.fillStyle = `rgb(${r},${g},${b})`;
    this.drawShape(c);

    const area = this.area();
    c.fillStyle = "black";
    c.fillText(
      `Area: ${area.toFixed(4)}, Color: ${JSON.stringify(color)}`,
      this.pos.x,
      this.pos.y
    );
  }

  protected abstract drawShape(c: CanvasRenderingContext2D): void;

  protected abstract area(): number;
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

  area(): number {
    const { radius } = this;

    return 2 * Math.PI * radius;
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

  area(): number {
    const {
      dimensions: { x: width, y: height },
    } = this;

    return width * height;
  }
}

export class Square extends Rectangle {
  constructor(pos: Point, color: Color, size: number) {
    super(pos, color, { x: size, y: size });
  }
}
