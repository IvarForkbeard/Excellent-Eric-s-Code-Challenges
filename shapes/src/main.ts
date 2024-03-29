import "./style.css";
import { Circle, Rectangle, Square } from "./shapes.ts";
import { cyan, indigo, purple } from "./color.ts";

const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
const c = canvas.getContext("2d");
if (!c) {
  throw new Error("canvas was not found");
}

const shapes = [
  new Circle({ x: 50, y: 100 }, purple, 30),
  new Rectangle({ x: 80, y: 60 }, cyan, { x: 40, y: 20 }),
  new Square({ x: 0, y: 20 }, indigo, 50),
];

shapes.forEach((shape) => {
  shape.draw(c);
});
