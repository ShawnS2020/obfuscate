import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function userInput(q) {
    return new Promise((resolve, reject) => {
        rl.question(q, (a) => {
            resolve(a);
            rl.close();
        });
    });
}

let userNum = await userInput("Enter a number: ");

function cube(x) {
    let u = parseInt(x);
    return u * u * u;
}

const randNumber = Math.floor(Math.random() * 1000) + 1;

function getCircumference(r) {
    let pi = 3.141592653589793238462643383279502884197169399375105820974944592307816406286;
    return 2 * pi * r;
}

const cubeUserNum = cube(userNum);
const avg = (randNumber + cubeUserNum) / 2;
const circumference = getCircumference(avg);
console.log(circumference);