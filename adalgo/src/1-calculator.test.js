import {expect, test} from "vitest";
import {calculator} from "./1-calculator";

test("Check if calculator adds numbers correctly", () => {
    expect(calculator(2, 3, '+')).toBe(5);
    expect(calculator(10, 5, '+')).toBe(15);
});

test("Check if calculator subtracts numbers correctly", () => {
    expect(calculator(5, 3, '-')).toBe(2);
    expect(calculator(10, 15, '-')).toBe(-5);
});

test("Check if calculator multiplies numbers correctly", () => {
    expect(calculator(4, 3, '*')).toBe(12);
    expect(calculator(7, 8, '*')).toBe(56);
});

test("Check if calculator divides numbers correctly", () => {
    expect(calculator(15, 3, '/')).toBe(5);
    expect(calculator(10, 4, '/')).toBe(2.5);
});

test("Check if calculator handles invalid operator", () => {
    expect(calculator(2, 3, '%')).toBe("Opérateur invalide");
});