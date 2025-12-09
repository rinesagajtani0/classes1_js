// 1) Implement a class that describes a circle. It must have the following components:

// a field that stores the radius of the circle;
// get-property that returns the radius of the circle;
// set-property that sets the radius of the circle;
// get-property that returns the diameter of the circle;
// a method that calculates the area of a circle;
// a method that calculates the length of the circle.
// Demonstrate the work of properties and methods.

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

// 2) Implement a class that describes a stationery marker. It must have the following components:

// a field that stores the color of the marker;
// a field that stores the amount of ink in the marker (in percent);
// an input method (accepts a string and prints the text in the corresponding color; the text is displayed as long as there is ink in the marker; one non-whitespace character is 0.5% of the ink in the marker).
// Implement a class that describes a refillable marker. Inherit this class from a simple marker and add a method for refilling.

// Demonstrate the work of the written methods.

 class Marker {
  constructor(color) {
    this.color = color;
  }

   print(text) {
    let output = "";
    for (let char of text) {
      if (this.ink <= 0) break;
      if (char !== " ") {
        this.ink -= 0.5;
      }
      output += char;
    }
    document.write('<p style="color:' + this.color + '">' + output + '</p>');
  }
}

class RefillableMarker extends Marker {
  refill(amount) {
    this.ink += amount;
  }
}

let marker = new RefillableMarker("blue", 5);

marker.print("Hello World!");
marker.print(" Coding is fun!");

marker.refill(10);

marker.print(" Now I have more ink!");