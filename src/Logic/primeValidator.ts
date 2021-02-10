export const validatePrime = (c: number) => {
  let j = 2; // variable
  const primeNumbers = [1]; // arreglo de numeros primos

  // verificamos que el numero es primo
  const prime = (c: number) => {
    for (let i = 2; i < c; i++) {
      if (c % i === 0) {
        return false;
      }
    }
    return c !== 1;
  };

  for (; j <= c; j++) {
    if (prime(j)) {
      primeNumbers.push(j);
    }
  }
  primeNumbers.reverse();
  return primeNumbers;
};
