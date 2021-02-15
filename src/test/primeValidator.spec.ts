import { validatePrime } from "../Logic/primeValidator";

describe("Pruebas en primeValidator.ts", () => {
  test("Por ejemplo, dado el número 7", () => {
    const value = 7;
    const result = [7, 5, 3, 2, 1];
    const validate = validatePrime(value);
    expect(validate).toEqual(result);
  });
  test("Por ejemplo, dado el número 15", () => {
    expect(validatePrime(15)).toEqual([13, 11, 7, 5, 3, 2, 1]);
  });
});
