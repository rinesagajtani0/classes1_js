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
