import {expect, test} from "vitest";
import {fibonacci} from "./7-fibonacci";

test("Check if fibonacci returns empty array for 0", () => {
    expect(fibonacci(0)).toEqual([]);
});

test("Check if fibonacci returns [0] for 1", () => {
    expect(fibonacci(1)).toEqual([0]);
});

test("Check if fibonacci returns [0, 1] for 2", () => {
    expect(fibonacci(2)).toEqual([0, 1]);
});

test("Check if fibonacci returns correct sequence for 5", () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});

test("Check if fibonacci returns correct sequence for 8", () => {
    expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("Check if fibonacci handles negative numbers", () => {
    expect(fibonacci(-1)).toEqual([]);
});