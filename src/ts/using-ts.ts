

const addButton = document.getElementById("addButton")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function addUsingTsc(num1: number, num2: number): number {
    return num1 + num2;
}

addButton?.addEventListener("click", function() {
    console.log(addUsingTsc(+input1.value, +input2.value));
});