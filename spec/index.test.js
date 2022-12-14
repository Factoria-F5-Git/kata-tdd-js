const fizzBuzzGame = require("../src/index");

test("FizzBuzzGame returns fizz when number is 30", () => {
    let inputNumber = 30

    let fizzBuzzResponse = fizzBuzzGame(inputNumber)

    expect(fizzBuzzResponse).toBe("Fizz")
})

test("FizzBuzzGame returns Buzz when number is 50", () => {
    let inputNumber = 50

    let fizzBuzzResponse = fizzBuzzGame(inputNumber)

    expect(fizzBuzzResponse).toBe("Buzz")
})

test("FizzBuzzGame returns Buzz when number is 33", () => {
    let inputNumber = 33

    let fizzBuzzResponse = fizzBuzzGame(inputNumber)

    expect(fizzBuzzResponse).toBe("Fizz")
})