import {expect, test} from "vitest";
import {arrayToFrench} from "./5-arrayToFrench";

test("Check if arrayToFrench formats arrays correctly", () => {
    expect(arrayToFrench(['un', 'deux', 'trois', 'soleil'])).toBe("un, deux, trois et soleil");
    expect(arrayToFrench(['noir', 'blanc'])).toBe("noir et blanc");
});

test("Check if arrayToFrench handles single element", () => {
    expect(arrayToFrench(['seul'])).toBe("seul");
});

test("Check if arrayToFrench handles empty array", () => {
    expect(arrayToFrench([])).toBe("");
});

test("Check if arrayToFrench handles three elements", () => {
    expect(arrayToFrench(['pomme', 'poire', 'banane'])).toBe("pomme, poire et banane");
});