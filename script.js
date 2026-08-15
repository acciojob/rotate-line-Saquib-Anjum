//your JS code here. If required.
const line = document.getElementById("line");

let angle = 0;
setInterval(() => {
    angle += 2; // Increase angle by 2 degrees (or adjust speed)
    line.style.transform = `rotate(${angle}deg)`;
}, 20); // updates every 20ms

