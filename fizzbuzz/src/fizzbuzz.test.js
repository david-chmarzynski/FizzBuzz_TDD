import fizzBuzz from './fizzbuzz';

describe('Test FizzBuzz', () => {
  test('Should return 1 if 1 given param', () => {
    const number = [1];
    expect(fizzBuzz(number)).toEqual([1]);
  });

  test('Should return 2 if 2 given param', () => {
    const number = [2];
    expect(fizzBuzz(number)).toEqual([2]);
  });

  test('Should return fizz if 3 given param', () => {
    const number = [3];
    expect(fizzBuzz(number)).toEqual(["fizz"]);
  });

  test('Should return fizz if 6 given param', () => {
    const number = [6];
    expect(fizzBuzz(number)).toEqual(["fizz"]);
  });

  test('Should return buzz if 5 given param', () => {
    const number = [5];
    expect(fizzBuzz(number)).toEqual(["buzz"]);
  });

  test('Should return buzz if 10 given param', () => {
    const number = [10];
    expect(fizzBuzz(number)).toEqual(["buzz"]);
  });

  test('Should return buzz if 15 given param', () => {
    const number = [15];
    expect(fizzBuzz(number)).toEqual(['fizzbuzz']);
  });

  test('Should return the correct value if array given', () => {
    const array = [3, 5];
    expect(fizzBuzz(array)).toEqual(['fizz', 'buzz']);
  });
  
  test('Should return the correct value if big array given', () => {
    const array = [1, 2, 3, 5, 10, 11, 15, 13];
    expect(fizzBuzz(array)).toEqual([1, 2, "fizz", "buzz", "buzz", 11, "fizzbuzz", 13]);
  });
})