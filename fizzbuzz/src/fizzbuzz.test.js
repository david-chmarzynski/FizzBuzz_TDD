import fizzBuzz from './fizzbuzz';

describe('Test FizzBuzz', () => {
  test('Should return 1 if 1 given param', () => {
    const number = 1;
    expect(fizzBuzz(number)).toBe(number);
  });

  test('Should return 2 if 2 given param', () => {
    const number = 2;
    expect(fizzBuzz(number)).toBe(number);
  });

  test('Should return fizz if 3 given param', () => {
    const number = 3;
    expect(fizzBuzz(number)).toBe("fizz");
  });

  test('Should return fizz if 6 given param', () => {
    const number = 6;
    expect(fizzBuzz(number)).toBe('fizz');
  });

  test('Should return buzz if 5 given param', () => {
    const number = 5;
    expect(fizzBuzz(5)).toBe('buzz');
  });
})