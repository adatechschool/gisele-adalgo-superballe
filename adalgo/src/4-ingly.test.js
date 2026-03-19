import {expect, test} from "vitest";
import {ingly} from "./4-ingly";

test("Check if ingly adds 'ing' to words not ending with ing", () => {
    expect(ingly("play")).toBe("playing");
    expect(ingly("swim")).toBe("swiming");
    expect(ingly("jump")).toBe("jumping");
    expect(ingly("run")).toBe("running"); // Note: devrait être "running" mais notre implémentation simple fait "runing"
});

test("Check if ingly adds 'ly' to words ending with ing", () => {
    expect(ingly("playing")).toBe("playingly");
    expect(ingly("jumping")).toBe("jumpingly");
    expect(ingly("swinging")).toBe("swingingly");
});