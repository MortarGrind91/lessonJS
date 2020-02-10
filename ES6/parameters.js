function greet(greeting = 'Hello', name = 'friend'){
    console.log(`${greeting} ${name}`);
}

// greet('Hi', 'Dima');
// greet('Hi');
// greet();

// function sum(){
//     console.log(arguments);
//     var sum = 0;

//     Array.prototype.forEach.call(arguments, function(value){
//       sum += value;  
//     });

//     console.log(sum);
// }

// function sum(...values){
//     let sum = 0;

//     values.forEach(item => {
//         sum += item;
//     });

//     console.log(sum);
// }

function sum(...values){
    let sum = 0;

    console.log(values.reduce(function(prevValue, currentValue){
        return prevValue + currentValue;
    }));
}

sum(5, 7, 2, 10);