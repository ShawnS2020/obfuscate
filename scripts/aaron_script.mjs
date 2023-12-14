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

function script(x) {
  
  let sequence = [0,1];
  let newSequence = [2,4];

    function listsequence(num) {
    // starting at array index 1, and push current index + previous index to the array
        for (let i = 1; i < num; i++) {
            sequence.push(sequence[i] + sequence[i - 1]);
        }
        //console.log(sequence[num]);
        return sequence[num];
    }

    function listnewSequence(num) {
      let newSequence = [0, 2];
      for (let i = 1; i < num; i++) {
          newSequence.push(newSequence[i] + newSequence[i - 1]);
      }
      //console.log(newSequence[num]);
      return newSequence[num];
  }
  
  console.log(listnewSequence(listsequence(x)-listnewSequence(x)))
}

script(b)