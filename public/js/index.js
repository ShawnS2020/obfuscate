import calculatePrimes from './calc_primes.js';

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    runTest();
});

function runTest() {
  const startTime = performance.now();
  // Adjust this limit to preference.
  const limit = 10000;
  const primes = calculatePrimes(limit);
  const endTime = performance.now();
  
  const duration = endTime - startTime;
  console.log(`Calculation took ${duration} milliseconds.`);
  console.log(`Found ${primes.length} prime numbers.`);
}