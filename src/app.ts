
// Object types are there to describe the type of object that is getting used somewhere
// const personObject: { 
//     name: string;
//     age: number;
// } = {
//     name: 'Object Max',
//     age: 25
// };
// console.log("The person's name is: " + personObject.name);


// Array Types
// const personArray: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // Tuple
// } = {
//     name: "Array John",
//     age: 40,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'] // Tuple
// };

// personArray.role.push('admin');

// let favoriteActivities: string[] = ['Sports', 'Cleaning'];
// console.log(personArray.name);

// for (const hobby of personArray.hobbies) {
//     console.log(hobby.toUpperCase());
// }


// ENUM Types
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200};

const personEnum = {
    name: "Enum Doe",
    age: 42,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if (personEnum.role === Role.ADMIN) {
    console.log(personEnum.name + ' is an admin');
}