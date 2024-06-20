// найти всех не женатых 

let arr = [
    {
        name: 'Ramiz',
        age: 16,
        isMarried: true
    },
    {
        name: 'Jaxongir',
        age: 15,
        isMarried: false
    },
    {
        name: 'Kamran',
        age: 17,
        isMarried: false
    },
    {
        name: 'Amin',
        age: 18,
        isMarried: true
    }
]
let unmarried = [] 
arr.forEach((person) => {
    if (!person.isMarried) {
        unmarried.push(person.isMarried);
        }
        });
        
    console.log(unmarried);


// найти средний возраст
        
let middle = arr.reduce ((total,person) => total + person.age, 0) / arr.length 

console.log(middle);



// найти самого старшего 

let senior = arr.reduce ((a, b) => {
    if(a.age > b.age){
        return a
    } else {
        return b
    }
} )

console.log(senior.age);







// найти самого младшего

let junior = arr.reduce((a, b) => {
    if (a.age < b.age) {
        return a;
    } else {
        return b;
    }
});

console.log(junior.age);




