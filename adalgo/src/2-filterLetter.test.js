import {expect, test} from "vitest";
import {filterLetter} from "./2-filterLetter";

test("Check if filterLetter executes first callback for letters", () => {
    const callback1 = () => "c'est une lettre";
    const callback2 = () => "ce n'est pas une lettre";
    
    expect(filterLetter("a", callback1, callback2)).toBe("c'est une lettre");
    expect(filterLetter("Z", callback1, callback2)).toBe("c'est une lettre");
});

test("Check if filterLetter executes second callback for non-letters", () => {
    const callback1 = () => "c'est une lettre";
    const callback2 = () => "ce n'est pas une lettre";
    
    expect(filterLetter("8", callback1, callback2)).toBe("ce n'est pas une lettre");
    expect(filterLetter("!", callback1, callback2)).toBe("ce n'est pas une lettre");
    expect(filterLetter("abc", callback1, callback2)).toBe("ce n'est pas une lettre"); // plus d'un caractère
});