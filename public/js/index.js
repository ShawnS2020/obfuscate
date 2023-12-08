import calculatePrimes from './calc_primes.js';
import obfCalculatePrimes from './obf_calc_primes.js';

const unobfBtn = document.getElementById('unobfBtn');
const obfBtn = document.getElementById('obfBtn');

unobfBtn.addEventListener('click', () => {
    unobfuscated();
});

obfBtn.addEventListener('click', () => {
    obfuscated();
});

function unobfuscated() {
  const startTime = performance.now();
  // Adjust this limit to preference.
  const limit = 1000000;
  const primes = calculatePrimes(limit);
  const endTime = performance.now();
  
  const duration = endTime - startTime;
  console.log(`Calculation took ${duration} milliseconds.`);
  console.log(`Found ${primes.length} prime numbers.`);
}

function obfuscated() {
  const startTime = performance.now();
  // Adjust this limit to preference.
  const limit = 1000000;
  const primes = obfCalculatePrimes(limit);
  const endTime = performance.now();
  
  const duration = endTime - startTime;
  console.log(`Calculation took ${duration} milliseconds.`);
  console.log(`Found ${primes.length} prime numbers.`);
}