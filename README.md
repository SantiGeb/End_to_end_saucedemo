diff --git a/README.md b/README.md
new file mode 100644
index 0000000000000000000000000000000000000000..5f1c455373f450dd647a86bf12b9caa71735b85a
--- /dev/null
+++ b/README.md
@@ -0,0 +1,104 @@
+# End-to-End Saucedemo Tests (Playwright + TypeScript)
+
+Automated end-to-end regression coverage for the [Saucedemo](https://www.saucedemo.com/) storefront using Playwright Test and the Page Object Model. This repository doubles as a portfolio-ready example for QA automation roles, demonstrating modern tooling, maintainable abstractions, and cross-browser coverage.
+
+## Purpose
+- Present a concise, real-world automation project for hiring conversations.
+- Demonstrate ability to design maintainable Playwright tests with clear structure, page objects, and reusable fixtures.
+- Serve as a starting point for deeper discussions about strategy, reliability, and CI/CD in front-end testing.
+
+## Technologies & Skills Demonstrated
+- **Playwright Test** for cross-browser automation (Chromium, Firefox, WebKit) with parallelism and retries.
+- **TypeScript** for type-safe page objects and tests.
+- **Page Object Model (POM)** to encapsulate UI interactions per application area.
+- **Reporting & Diagnostics** via Playwright trace viewer, HTML report, and screenshot capture on failure.
+- **Test Design** covering positive flows, reusable actions, and locator strategies based on accessibility.
+
+## Status & Progress
+- ✅ Core happy-path checkout flow automated (login → add to cart → checkout → confirmation).
+- ✅ Page Object Model in place with a `PageManager` factory for easy scaling.
+- ⏳ Additional scenarios (sorting, logout, negative login, data-driven coverage) ready to be added using existing patterns.
+
+## Project Layout
+```
+pageObjects/             # Page Object Model classes
+  loginPage.ts           # Login form interactions
+  productsPage.ts        # Product listing and cart access
+  shoppingCartPage.ts    # Cart assertions and checkout entry
+  checkOutPage.ts        # Checkout form interactions
+  checkOutOverview.ts    # Order summary validation
+  checOutComplete.ts     # Completion page assertion
+  pageManager.ts         # Factory to access all page objects
+playwright.config.ts     # Shared Playwright configuration and browser matrix
+package.json             # Dependencies (Playwright + TypeScript typings)
+tests/                   # Playwright test suites
+  SauceDemoTest.spec.ts  # Primary end-to-end purchase scenario
+  example.spec.ts        # Starter Playwright sample tests
+```
+
+## How the Code Is Organized
+- **Tests** (`tests/`) are concise and describe user intent; they pull actions from page objects to reduce duplication.
+- **Page objects** (`pageObjects/`) expose focused actions and assertions per page (e.g., `addBackPackToCart`, `validateItemsInCart`, `checkOutInformation`).
+- **PageManager** centralizes object creation and shared context, keeping tests readable and consistent.
+- **Configuration** (`playwright.config.ts`) sets browser projects, retries, timeouts, trace capture, and reporters.
+
+## Setup
+1. Install dependencies (Playwright will download required browsers automatically):
+   ```bash
+   npm install
+   ```
+2. (Optional) Update `playwright.config.ts` with custom base URLs or reporters.
+
+## Running the Tests
+- Run the full suite across Chromium, Firefox, and WebKit (parallelized):
+  ```bash
+  npx playwright test
+  ```
+- Target a specific browser or test file (helpful during development):
+  ```bash
+  npx playwright test tests/SauceDemoTest.spec.ts --project=chromium
+  ```
+- View the HTML report after a run:
+  ```bash
+  npx playwright show-report
+  ```
+
+## Best Practices Used
+- **Resilient locators** based on roles, labels, and placeholders to reduce brittleness.
+- **Fast feedback** via parallel execution and retries on CI.
+- **Single-responsibility page objects** that separate concerns and keep tests declarative.
+- **Deterministic flows** with clear assertions at each milestone (login, cart contents, checkout summary, completion state).
+- **Traceability** through built-in Playwright traces, screenshots, and HTML reports.
+
+## CI/CD
+- The project is CI-ready: the default `npx playwright test` command runs headless and produces HTML and trace artifacts suitable for pipelines.
+- To integrate with GitHub Actions, reuse the Playwright template (`actions/setup-node`, `npx playwright install --with-deps`, `npx playwright test`) and publish the `playwright-report` artifact for review.
+- JUnit/Allure reporters can be added in `playwright.config.ts` if a specific organization requires standardized test output.
+
+## Test Results
+- Latest local check: `npx playwright test --list` (command completes quickly to enumerate suites).
+- For interviews, consider running `npx playwright test --project=chromium` and sharing the generated HTML report or trace archive.
+
+## Notes for Hiring Manager
+- This repo emphasizes clear structure over volume: the primary flow is intentionally small but production-ready.
+- Demonstrates ability to build from scratch (config, POM, fixtures) and is designed for rapid extension to cover edge cases or negative paths.
+- Shows familiarity with modern QA tooling, diagnostics, and best practices around maintainability and readability.
+
+## Featured Scenario
+`tests/SauceDemoTest.spec.ts` covers an end-to-end buyer journey:
+1. Navigate to Saucedemo and validate the landing page banner.
+2. Log in with `standard_user` credentials.
+3. Add the "Sauce Labs Backpack" to the cart and open the cart.
+4. Assert items present, proceed to checkout, and supply shipping details.
+5. Confirm the overview page, finish checkout, and verify the completion screen.
+
+## Extending for Interviews
+- Add new scenarios (sorting, logout, negative login) by copying the structure in `tests/SauceDemoTest.spec.ts` and reusing page objects.
+- Demonstrate debugging chops with Playwright trace viewer (`trace: 'on-first-retry'` is enabled in the config) or headed mode (`npx playwright test --headed`).
+- Extend reporting to include CI-friendly artifacts (JUnit/Allure) by adjusting `reporter` in `playwright.config.ts`.
+
+## Contact
+Author: **Santiago Garza** — QA Engineer (Manual & Automation)
+- GitHub: [SantiGeb](https://github.com/SantiGeb)
+- LinkedIn: [Santiago Garza](https://www.linkedin.com/in/santiago-g-4b4564149/)
+- Email: garzaestradasantiago@gmail.com
