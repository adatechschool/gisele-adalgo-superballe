import {expect, test} from "vitest";
import {goToLevel} from "./3-goToLevel";

test("Check if goToLevel moves up correctly", () => {
    expect(goToLevel(0, 3)).toBe(3);
    expect(goToLevel(1, 5)).toBe(4);
    expect(goToLevel(2, 2)).toBe(0);
});

test("Check if goToLevel moves down correctly", () => {
    expect(goToLevel(3, 0)).toBe(-3);
    expect(goToLevel(5, 1)).toBe(-4);
});

test("Check if goToLevel stays at same level", () => {
    expect(goToLevel(4, 4)).toBe(0);
});