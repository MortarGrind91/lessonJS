// let scores = [3, 4, [5,6]];
// let [low, mid, [high, higher]] = scores;

//console.log(low, mid, high, higher);

// const computeScore = ([low, mid]) =>{
//     console.log(low, mid);
// }

// const getScore = () => [3, 4, 5];
// let scores = getScore();
// let [low, mid, high] = scores;

// console.log(low, mid, high);

// let yes = 'Yes';
// let no = 'No';

// [yes, no] = [yes, no];

// console.log(`Yes is ${yes}`);
// console.log(`No is ${no}`);

let user = {
    firstname: 'Dima',
    lastname: 'Huz',
    social: {
        facebook: 'facebook',
        twitter: 'twitter',
    }
};

let{firstname:first, lastname:last, social: {facebook: fb}} = user;

console.log(first, last, fb);