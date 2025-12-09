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

let input = prompt("Enter radius of circle:");
let r = Number(input);
let circle = new Circle(r);

document.write('<div class="result-box">');
document.write('<div class="header">Circle with radius ' + circle.radius + '</div>');
document.write('<div class="line">Diameter: ' + circle.diameter + '</div>');
document.write('<div class="line">Area: ' + circle.getArea().toFixed(2) + '</div>');
document.write('<div class="line">Circumference: ' + circle.getCircumference().toFixed(2) + '</div>');
document.write('</div>');