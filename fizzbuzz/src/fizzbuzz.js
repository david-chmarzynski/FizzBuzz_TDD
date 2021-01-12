const fizzBuzz = (array) => {
  let result = [];
  array.map((num) => {
    if(num % 15 === 0) {
      return result.push("fizzbuzz");
    } else if(num % 3 === 0) {
      return result.push("fizz");
    } else if(num % 5 === 0) {
      return result.push("buzz");
    } else {
      return result.push(num);
    }
  })
  return result;
};

export default fizzBuzz;