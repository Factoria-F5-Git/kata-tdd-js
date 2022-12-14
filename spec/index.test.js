const fizzBuzzGame = require("../src/index");

test("FizzBuzzGame returns fizz when number is 30", () => {
    let inputNumber = 30

    let fizzBuzzResponse = fizzBuzzGame(inputNumber)

    expect(fizzBuzzResponse).toBe("Fizz")
})