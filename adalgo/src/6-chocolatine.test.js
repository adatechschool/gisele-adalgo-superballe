import {expect, test} from "vitest";
import {chocolatine} from "./6-chocolatine";

test("Check if chocolatine replaces 'pain au chocolat' correctly", () => {
    expect(chocolatine("J'aime le pain au chocolat")).toBe("J'aime le chocolatine");
    expect(chocolatine("pain au chocolat")).toBe("chocolatine");
});

test("Check if chocolatine handles plural", () => {
    expect(chocolatine("J'aime les pains au chocolat")).toBe("J'aime les chocolatines");
});

test("Check if chocolatine handles 'un pain au chocolat'", () => {
    expect(chocolatine("Je veux un pain au chocolat")).toBe("Je veux une chocolatine");
});

test("Check if chocolatine handles multiple occurrences", () => {
    expect(chocolatine("pain au chocolat et pain au chocolat")).toBe("chocolatine et chocolatine");
});

test("Check if chocolatine returns same string when no replacement needed", () => {
    expect(chocolatine("J'aime les croissants")).toBe("J'aime les croissants");
});