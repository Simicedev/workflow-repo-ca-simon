import { test, expect } from "@playwright/test";

const EMAIL = process.env.TEST_USER_EMAIL;
const PASSWORD = process.env.TEST_USER_PASSWORD;

test.describe("Login", () => {
  test("user can successfully log in with valid credentials", async ({
    page,
  }) => {
    if (!EMAIL || !PASSWORD) {
      test.skip(true, "No TEST_USER_EMAIL or TEST_USER_PASSWORD in env");
    }
    await page.goto("/login");
    await page.fill('input[name="email"]', EMAIL);
    await page.fill('input[name="password"]', PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL("**/");
    // After login we expect to see the menu greeting
    await expect(page.locator("text=Hi")).toBeVisible();
  });

  test("user sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");
    await page.fill('input[name="email"]', "invalid@example.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');
    // Expect an error message container to contain text indicating failure
    await expect(page.locator("#message-container")).toContainText(
      /login failed/i,
    );
  });
});
