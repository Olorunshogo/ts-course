
"use strict";
const userFullName = 'Max App';
console.log(userFullName);

// const button = document.querySelector('button');
const button = document.getElementById('clickButton');
button?.addEventListener('click', () => {
    console.log('Clicked');
});

// No unused parameters
function clickHandler(message: string) {
    // let userName = 'Max';
    console.log('Clicked! ' + message);
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}

// No implicit returns
function add(n1:number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}