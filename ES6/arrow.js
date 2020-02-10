const add = (a, b) => a + b;
const square = x => x * x;
const giveMeAnswer = () => 42;
const log = () => console.log('Loading');
const multiply = (x, y) => {
    const result = x * y;
    return result;
}

const getPerson = () => ({name: 'Dima'});

//(() => console.log('IIFE'))();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

numbers.forEach(num => sum += num);

let squared = numbers.map(n => n * n);

let person = {
    name: 'Dima',
    greet: function(){
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
            console.log(this);
        }, 2000);
    }
}

person.greet();