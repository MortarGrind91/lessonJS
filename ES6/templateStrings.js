function greet(name){
    console.log(`Hello ${name}`);
}

function createEmail(to, from, subject, message){
    console.log(`
            to: ${to}
            from: ${from}
            subject: ${subject}
            message: ${message}
    `);
}

createEmail('dima@mail.com', 'ann@mail.com', 'Hello', 'How are you doing?');


function add(x,y){
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
    
}

add('6','6');

let name = 'Dima';

console.log(upperName`Hello ${name}`);

function upperName(literals, value){
    return literals[0] + value.toUpperCase();
}
