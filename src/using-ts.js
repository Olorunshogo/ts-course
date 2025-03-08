var addButton = document.getElementById("addButton");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
addButton.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
