
// Union Type
// function combine(input1: number | string, input2: number | string) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 == 'number') {
//         result = input1 + input2;
//     }
//     else {
//         result = input1.toString() + " " + input2.toString();
//     }
//     return result;
// }

// const combinedAges = combine(30, 26);
// console.log('The combined age is: ' + combinedAges);

// const combinedNames = combine('Max', 'Anna');
// console.log('The combined name is: ' + combinedNames);

// Literal Types
function litCombine(
    litInput1: number | string, 
    litInput2: number | string, 
    litConv: string
) {
    let litRes;
    if (typeof litInput1 === 'number' && typeof litInput2 == 'number') {
        litRes = litInput1 + litInput2;
    }
    else {
        litRes = litInput1.toString() + " " + litInput2.toString();
    }
    return litRes;
}

const litCombinedAges = litCombine(97, 42, 'as-number');
console.log('The combined age is: ' + litCombinedAges);

const litCombinedNames = litCombine('Literal', 'Anna', 'as-text');
console.log('The combined name is: ' + litCombinedNames);