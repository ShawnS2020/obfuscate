import readline from 'readline';

// I copied lines 1-21 for user input usage
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

//below is my obfuscated code, enjoy it fully

(function(a){let b=[0,1],c=[2,4];function d(e){for(let f=1;f<e;f++)b.push(b[f]+b[f-1]);return b[e]}function g(e){let h=[0,2];for(let i=1;i<e;i++)h.push(h[i]+h[i-1]);console.log(h[e]);return h[e]}g(d(a));})(b);