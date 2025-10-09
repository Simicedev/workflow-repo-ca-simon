import { describe, it, expect } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

/**
 * Cases:
 * 1. Returns true when current path matches href exactly
 * 2. Returns true for root path ("/") when path is "/" or "/index.html"
 * 3. Returns true when current path includes the href
 * 4. Returns false when paths don't match
 */

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  it("returns true for root href / when current path is /", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it("returns true for root href / when current path is /index.html", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes href", () => {
    expect(isActivePath("/venue", "/venue/123")).toBe(true);
  });

  it("returns false when paths don't match", () => {
    expect(isActivePath("/login", "/register")).toBe(false);
  });
});
