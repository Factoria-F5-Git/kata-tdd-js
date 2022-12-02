const getAboutUsLink = require("../src/index");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});

test("something", () => {
    expect(2+3).toBe(5)
})