
function fizzBuzzGame(number)
{
  const isMultipleOfThree = number % 3 === 0
  const isMultipleOfFive = number % 5 === 0

  if (isMultipleOfThree && isMultipleOfFive) {
    return "FizzBuzz"
  }

  if (isMultipleOfThree) {
    return "Fizz"
  }

  return "Buzz"
}

module.exports = fizzBuzzGame;
