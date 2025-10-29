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
    // Use a Noroff-domain email to bypass domain validation, but wrong password to force an error
    await page.fill('input[name="email"]', "invalid@noroff.no");
    await page.fill('input[name="password"]', "short"); // too short to pass validation
    await page.click('button[type="submit"]');
    // Accept either client-side validation error or server-side login failure text
    await expect(page.locator("#message-container")).toContainText(
      /(login failed|Please enter a noroff\.no or stud\.noroff\.no email address\.|Password must be at least 8 characters long\.)/i,
    );
  });
});
