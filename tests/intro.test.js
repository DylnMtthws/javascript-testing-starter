import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz } from "../src/intro";

describe("max", () => {
  it("should return first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if arg is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if arg is divisible by 3 only", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("should return Buzz if arg is divisible by 5 only", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return arg as a string if arg is not divisible by 3 or 5", () => {
    expect(fizzBuzz(7)).toBe("7");
  });
});
