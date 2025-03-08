
// Object types are there to describe the type of object that is getting used somewhere
const info: { 
    name: string;
    age: number;
 } = {
    name: 'Maximilian',
    age: 30
};

console.log("The person's name is: " + info.name);

// Array types
const person = {
    name: "John Doe",
    age: 42,
    hobbies: ['Sports', 'Cooking']
}
let favoriteActivities: any[] = ['Sports', 'Cleaning', 2];
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}