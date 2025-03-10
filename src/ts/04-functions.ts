type numResult = number;

// Function Return Types and Void
function addFunction(
    n1: numResult, 
    n2:numResult
):number  {
    return n1 + n2;
    // return n1.toString() + n2.toString();
}

function printVoid(
    num: numResult, 
): void  {
    console.log('Print Void is: ' + num);
    // return num;
}
printVoid(addFunction(5, 13));

function printUndefined(
    num: numResult, 
): undefined  {
    console.log('Print Undefined is: ' + num);
    return;
}
printUndefined(12);

// Function Types
let combineValues: (a: numResult, b:numResult) => numResult;
combineValues = addFunction;
// combineValues = printResult;
// combineValues = 5;

console.log('Combine Values is: ' + combineValues(8, 9));

function addAndHandle(
    n1: numResult,
    n2: numResult,
    cb: (num: numResult) => void // Dpn't do anything with the return type
) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log('Add And Handle Result is: ' + result);
});