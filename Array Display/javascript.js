// function popPushFunc() {
//   let arrays = [24, 43, "car", "hat", "apple"];
//   const myArray = document.getElementById("array");
//   document.getElementById("array").innerHTML = arrays.toString();
//   const popValue = document.getElementById("popInput").value;
//   const pushValue = document.getElementById("pushInput").value;
//   arrays.push(pushValue);

//   console.log(popValue);
//   console.log(pushValue);
//   console.log(arrays);
//   return arrays.innerHTML;
// }

const myArray = [];
document.getElementById("array").innerHTML = myArray;

function popFunc() {
  const popValue = document.getElementById("popInput").value;

  if (popValue == "") {
    throw error;
  } else {
    myArray.pop(popValue);
    document.getElementById("array").innerHTML = myArray;
  }
}

function pushFunc() {
  const pushValue = document.getElementById("pushInput").value;
  myArray.push(pushValue);
  document.getElementById("array").innerHTML = myArray;
}
