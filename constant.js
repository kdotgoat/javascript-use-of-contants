const PI = 3.14159;
document.getElementById("myButton").onclick = function() {
    console.log("Button clicked!"); // Debugging output
    let radius = document.getElementById("myInput").value;
    radius = Number(radius);
    let circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
  };
  