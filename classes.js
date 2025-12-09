// 1) Implement a class that describes a circle. It must have the following components:
// a field that stores the radius of the circle;
// get-property that returns the radius of the circle;
// set-property that sets the radius of the circle;
// get-property that returns the diameter of the circle;
// a method that calculates the area of a circle;
// a method that calculates the length of the circle.
// Demonstrate the work of properties and methods.

// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }

//   get radius() {
//     return this._radius;
//   }

//   set radius(value) {
//     this._radius = value;
//   }

//   get diameter() {
//     return this._radius * 2;
//   }

//   getArea() {
//     return Math.PI * this._radius * this._radius;
//   }

//   getCircumference() {
//     return 2 * Math.PI * this._radius;
//   }
// }

// let input = prompt("Enter radius of circle:");
// let r = Number(input);
// let circle = new Circle(r);

// const box = document.createElement("div");
// box.className = "result-box";

// box.innerHTML = `
//   <div class="header">Circle with radius ${circle.radius}</div>
//   <div class="line">Diameter: ${circle.diameter}</div>
//   <div class="line">Area: ${circle.getArea().toFixed(2)}</div>
//   <div class="line">Circumference: ${circle.getCircumference().toFixed(2)}</div>
// `;

// document.body.appendChild(box);



// 2) Implement a class that describes a stationery marker. It must have the following components:
// a field that stores the color of the marker;
// a field that stores the amount of ink in the marker (in percent);
// an input method (accepts a string and prints the text in the corresponding color; the text is displayed as long as there is ink in the marker; one non-whitespace character is 0.5% of the ink in the marker).
// Implement a class that describes a refillable marker. Inherit this class from a simple marker and add a method for refilling.

// Demonstrate the work of the written methods.

// class Marker {
//   constructor(color, ink) {
//     this.color = color;
//     this.ink = ink;
//   }

//   print(text) {
//     let output = "";
//     for (let char of text) {
//       if (this.ink <= 0) break;
//       if (char !== " ") {
//         this.ink -= 0.5;
//       }
//       output += char;
//     }
//     console.log(`%c${output}`, `color:${this.color}`);
//     console.log("Remaining ink: " + this.ink.toFixed(1) + "%");
//   }
// }

// class RefillableMarker extends Marker {
//   constructor(color, ink) {
//     super(color, ink);
//   }

//   refill(amount) {
//     this.ink += amount;
//     console.log("Refilled! Ink is now: " + this.ink.toFixed(1) + "%");
//   }
// }

// let colorInput = prompt("Enter marker color (e.g. red):");
// let inkInput = Number(prompt("Enter ink amount (percent):"));
// let textInput = prompt("Enter text to print:");

// let marker = new RefillableMarker(colorInput, inkInput);

// console.log("Initial ink: " + marker.ink + "%");
// marker.print(textInput);

// if (marker.ink <= 0) {
//   console.log("Out of ink! Refilling...");
//   marker.refill(20);
//   marker.print(textInput);
// }



// 3) Implement the Employee class that describes the employee and create an array of bank employees.
// Implement the EmpTable class to generate HTML code for a table with a list of bank employees. 
// The array of employees must be passed through the constructor and get the HTML code using the getHtml () method.
// Create an object of class EmpTable and display the result of the getHtml () method.
// Set up sass compilation via webpack.

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

const employees = [
  new Employee("John Doe", "Manager", 3000),
  new Employee("Jane Smith", "Accountant", 2500),
  new Employee("Bob Wilson", "Cashier", 2000)
];


class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let table = "<table border='1' cellspacing='0' cellpadding='6' style='margin:20px auto; font-family:Arial;'>";
    table += "<tr><th>Name</th><th>Position</th><th>Salary</th></tr>";

    this.employees.forEach(emp => {
      table += `<tr>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>${emp.salary}</td>
      </tr>`;
    });

    table += "</table>";
    return table;
  }
}


const empTable = new EmpTable(employees);
const container = document.createElement("div");
container.innerHTML = empTable.getHtml();
document.body.appendChild(container);
