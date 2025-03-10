

// Unknown Type: I don't know the kind that's coming but I know what I am going to do with it
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
    userName = userInput;
}

// The Never Type