const fizzBuzzGame = require("../src/index");

test("FizzBuzzGame returns FizzBuzz when number is 30", () => {
    let inputNumber = 30

    let fizzBuzzResponse = fizzBuzzGame(inputNumber)

    expect(fizzBuzzResponse).toBe("FizzBuzz")
})

test("FizzBuzzGame returns Fizz when number is 12", () => {
    let inputNumber = 12

    let fizzBuzzResponse = fizzBuzzGame(inputNumber)

    expect(fizzBuzzResponse).toBe("Fizz")
})

test("FizzBuzzGame returns Buzz when number is 50", () => {
    let inputNumber = 50

    let fizzBuzzResponse = fizzBuzzGame(inputNumber)

    expect(fizzBuzzResponse).toBe("Buzz")
})

test("FizzBuzzGame returns Fizz when number is 33", () => {
    let inputNumber = 33

    let fizzBuzzResponse = fizzBuzzGame(inputNumber)

    expect(fizzBuzzResponse).toBe("Fizz")
})

test("FizzBuzzGame returns FizzBuzz when number is 15", () => {
    let inputNumber = 15

    let fizzBuzzResponse = fizzBuzzGame(inputNumber)

    expect(fizzBuzzResponse).toBe("FizzBuzz")
})