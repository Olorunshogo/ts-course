type numResult = number;

// Function Return Types and Void
function add(
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
printVoid(add(5, 13));

function printUndefined(
    num: numResult, 
): undefined  {
    console.log('Print Undefined is: ' + num);
    return;
}
printUndefined(12);



// let someValue: undefined;