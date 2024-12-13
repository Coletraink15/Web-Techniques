function myColor() {
  var color = document.getElementById("colorPicker").value;

  document.body.style.backgroundColor = color;
  document.getElementById("box").value = color;
}
document.getElementById("colorPicker").addEventListener("input", myColor);

function getBackgroundColor(element) {
  const computedStyle = window.getComputedStyle(element).backgroundColor;
  return computedStyle.backgroundColor;
}

const bodyBgColor = getBackgroundColor(document.body);
console.log(bodyBgColor);

// This code allows the color of the Headers to change to a
// white or black color depending on how dark or light the bakground color is.
function checkBackgroundColor() {
  const body = document.body;
  const currentColor = window.getComputedStyle(body).backgroundColor;
  var rgb = currentColor;
  const h1Element = document.querySelector("h1");
  const h2Element = document.querySelector("h2");
  const h3Element = document.querySelector("h3");
  rgb = rgb
    .substring(4, rgb.length - 1)
    .replace(/ /g, "")
    .split(",");
  if (rgb[0 || 1 || 2] >= 100) {
    h1Element.style.color = "black";
    h2Element.style.color = "black";
    h3Element.style.color = "black";
    console.log("white");
  }
  if (rgb[0 || 1 || 2] <= 99) {
    h1Element.style.color = "white";
    h2Element.style.color = "white";
    h3Element.style.color = "white";
    console.log("black");
  }
  console.log(rgb);
  console.log("Current Background Color is: ", typeof currentColor);

  return currentColor;
}

setInterval(checkBackgroundColor, 300);
