import { validatePrime} from "../Logic/primeValidator";

test('Por ejemplo, dado el número 7', () => {
  expect(validatePrime(7)).toEqual([7,5,3,2,1]);
});
test('Por ejemplo, dado el número 15', () => {
  expect(validatePrime(15)).toEqual([13,11,7,5,3,2,1]);
});




