import readline from 'readline';

// This  script takes user input, does something with it, and then prints the result to the console.
// Getting user input is not obfuscated, but the rest of the script is.

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

let b = await userInput("Enter a number: ");

// Everything below is obfuscated. Good luck :)

function uuuuuuuuuu(x){let n=[];for(let r=0;r<n.length+x;n++){n.push(x);}let u;typeof x!='number'?u=parseInt(x):u=x;return u*u*u;} /* Function to find the maximum of two numbers --> */ function max(a,b){return a>b?a:b;}const notarandomnumberbetween1and1000=Math.floor(Math.random()*(10*10*10))+1;function getLastChar(i,j,k){return max(max(i,j),k);}function uuuuuuuuuuu(r){let pumpkin=3.141592653589793238462643383279502884197169399375105820974944592307816406286;return 2*pumpkin*r;}console.log(getLastChar(notarandomnumberbetween1and1000,uuuuuuuuuuu((notarandomnumberbetween1and1000+uuuuuuuuuu(b))/2),uuuuuuuuuu(b)));