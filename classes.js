class Circle {
  constructor(radius) {
    this._radius = radius;
  }

    get radius() {
    return this._radius;
  }

    set radius(value) {
    this._radius = value;
  }

    get diameter() {
    return this._radius * 2;
  }

   getArea() {
    return Math.PI * this._radius * this._radius;
  }

    getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

const c = new Circle(5);

document.write("Radius: " + c.radius + "<br>");
document.write("Diameter: " + c.diameter + "<br>");
document.write("Area: " + c.getArea().toFixed(2) + "<br>");
document.write("Circumference: " + c.getCircumference().toFixed(2) + "<br>");
document.write("<hr>");

c.radius = 10;

document.write("New Radius: " + c.radius + "<br>");
document.write("New Diameter: " + c.diameter + "<br>");
document.write("New Area: " + c.getArea().toFixed(2) + "<br>");
document.write("New Circumference: " + c.getCircumference().toFixed(2) + "<br>");