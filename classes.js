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

console.log(c.radius);
console.log(c.diameter);
console.log(c.getArea());
console.log(c.getCircumference());

c.radius = 10;

console.log(c.radius);
console.log(c.diameter);
console.log(c.getArea());
console.log(c.getCircumference());
