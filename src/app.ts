
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';


// Union Type
function combine(
    input1: Combinable, 
    input2: Combinable
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log('The combined age is: ' + combinedAges);

const combinedNames = combine('Max', 'Union');
console.log('The combined name is: ' + combinedNames);


// Literal Types
function literalCombine(
    // literalInput1: string | number, 
    literalInput1: Combinable, 
    // literalInput2: string | number, 
    literalInput2: Combinable, 
    // literalResultConversion: string
    // literalResultConversion: 'as-number' | 'as-text'
    literalResultConversion: ConversionDescriptor
) {
    let literalResult;
    if (typeof literalInput1 === 'number' && typeof literalInput2 === 'number' || literalResultConversion === 'as-number') {
        literalResult = +literalInput1 + +literalInput2;
    }
    else {
        literalResult = literalInput1.toString() + " " + literalInput2.toString();
    }

    return literalResult;
}

const literalCombinedAges = literalCombine(97, 42, 'as-number');
console.log('The combined age is: ' +literalCombinedAges);

const literalCombinedNames = literalCombine('Anna', 'Literal', 'as-text');
console.log('The combined name is: ' +literalCombinedNames);