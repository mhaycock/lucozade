const functions = require("./index")

test("If the number is 100 or above Matt dies", () =>{
    let result = functions.MattDies(150);
    let expected = true;
    expect(result).toBe(expected)
});

test("If the number is less than 100 Matt survives", () =>{
    let result2 = functions.MattDies(23);
    let expected2 = false;
    expect(result2).toBe(expected2)
});

test("If the number is exactly 100 Matt still dies!", () =>{
    let result3 = functions.MattDies([100]);
    let expected3 = true;
    expect(result3).toBe(expected3)
});
