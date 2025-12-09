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
}
