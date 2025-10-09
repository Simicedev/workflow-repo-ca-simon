import { test, expect } from "@playwright/test";

// Helper to wait for venues to load by waiting for anchor cards
async function waitForVenues(page) {
  await page.waitForSelector("#venue-container a", { timeout: 15000 });
}

test.describe("Navigation", () => {
  test("navigate to home, open first venue and see venue details heading", async ({
    page,
  }) => {
    await page.goto("/");
    await waitForVenues(page);
    const firstVenue = page.locator("#venue-container a").first();
    const href = await firstVenue.getAttribute("href");
    await firstVenue.click();
    await page.waitForURL(`**${href}`);
    await expect(page.locator("h1")).toContainText(
      /venue details|loading venue/i,
    );
  });
});
