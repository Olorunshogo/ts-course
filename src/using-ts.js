"use strict";
const addButton = document.getElementById("addButton");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function addUsingTsc(num1, num2) {
    return num1 + num2;
}
addButton.addEventListener("click", function () {
    console.log(addUsingTsc(+input1.value, +input2.value));
});
