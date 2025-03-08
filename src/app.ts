
// Object types are there to describe the type of object that is getting used somewhere
const personObject: { 
    name: string;
    age: number;
 } = {
    name: 'Maximilian',
    age: 30
};

console.log("The person's name is: " + personObject.name);

// Array types
const personArray: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // Tuple
} = {
    name: "John Doe",
    age: 42,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] // Tuple
};

personArray.role.push('admin');
//personArray.role[1] = 10;

let favoriteActivities: string[] = ['Sports', 'Cleaning'];
console.log(personArray.name, personArray.age, personArray.hobbies, personArray.role);

for (const hobby of personArray.hobbies) {
    console.log(hobby.toUpperCase());
}