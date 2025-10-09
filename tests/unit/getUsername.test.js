import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "../../js/utils/storage.js";

// Provide a basic localStorage mock for the test environment.
if (typeof globalThis.localStorage === "undefined") {
  const store = new Map();
  globalThis.localStorage = {
    setItem: (key, value) => store.set(key, value),
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    removeItem: (key) => store.delete(key),
    clear: () => store.clear(),
  };
}

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });

  it("returns the name from the stored user object", () => {
    saveUser({ name: "Alice", email: "alice@example.com" });
    expect(getUsername()).toBe("Alice");
  });
});
