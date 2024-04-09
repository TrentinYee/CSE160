//asgn0.js

//global variables -----------

// Retrieve <canvas> element <- (1)
var canvas = document.getElementById('example');

// Get the rendering context for 2DCG <- (2)
var ctx = canvas.getContext('2d');

// functions --------------

function drawVector(v, color) {
    // array with 
    var dimensions = v.elements;

    //preparing to draw the line

    let cx = canvas.width/2;
    let cy = canvas.height/2;
    //console.log(dimensions[0]);
    //console.log(dimensions[1]);

    //drawing the line
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + dimensions[0] * 20, cy - dimensions[1] * 20);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function handleDrawEvent() {
    var width1 = document.getElementById("v1 width").value;
    var length1 = document.getElementById("v1 length").value;
    var width2 = document.getElementById("v2 width").value;
    var length2 = document.getElementById("v2 length").value;

    // clears the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

    var v1 = new Vector3([width1, length1, 0]);
    var v2 = new Vector3([width2, length2, 0]);

    drawVector(v1, "red");
    drawVector(v2, "blue");
}

function handleDrawOperationEvent() {
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

    // the entire code for handleDrawEvent, I need all the values
    var width1 = document.getElementById("v1 width").value;
    var length1 = document.getElementById("v1 length").value;
    var width2 = document.getElementById("v2 width").value;
    var length2 = document.getElementById("v2 length").value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

    var v1 = new Vector3([width1, length1, 0]);
    var v2 = new Vector3([width2, length2, 0]);

    drawVector(v1, "red");
    drawVector(v2, "blue");

    // Operation selection

    let oper = document.getElementById("oper_select").value;
    let scalar = document.getElementById("scalar").value;
    var v3 = new Vector3([0, 0, 0]);

    switch (oper) { //thank you eloquentjavascript
        case "add":
            var v3 = v3.set(v1);
            v3.add(v2);
            drawVector(v3, "green");
            break;
        case "sub":
            var v3 = v3.set(v1);
            v3.sub(v2);
            drawVector(v3, "green");
            break;
        case "div":
            var v3 = v3.set(v1);
            v3.div(scalar);
            drawVector(v3, "green");

            v3.set(v2);
            v3.div(scalar);
            drawVector(v3, "green");

            break;
        case "mul":
            var v3 = v3.set(v1);
            v3.mul(scalar);
            drawVector(v3, "green");

            v3.set(v2);
            v3.mul(scalar);
            drawVector(v3, "green");

            break;
        case "magnitude":
            var v3 = v3.set(v1);
            console.log(`Magnitude v1: ${v3.magnitude()}`);

            v3.set(v2);
            console.log(`Magnitude v2: ${v3.magnitude()}`);

            break;
        case "normalize":
            var v3 = v3.set(v1);
            v3.normalize();
            drawVector(v3, "green");

            v3.set(v2);
            v3.normalize();
            drawVector(v3, "green");

            break;
        case "angle between":
            var v3 = v3.set(v1);
            var angle;
            angle = Vector3.dot(v1, v2) / v1.magnitude();
            console.log(Vector3.dot(v1, v2));
            angle /= v2.magnitude(); 
            angle = Math.acos(angle);
            angle *= 180/Math.PI; // MDN to search up how to get PI and most of the Math functions

            console.log(`Angle: ${angle}`);

            break;
        case "area":
            var area;
            var v3 = Vector3.cross(v1, v2);

            area = v3.magnitude()/2;

            console.log(`Area: ${area}`);

            break;
        default:
            console.log("Operation not supported.");
            break;
    }

}

function main() {
    // Draw a black rectangle <- (3)
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color
} 