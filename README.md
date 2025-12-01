# End-to-End Saucedemo Tests
**Playwright + TypeScript | Portfolio-ready QA automation**

Modern end-to-end coverage for the [Saucedemo](https://www.saucedemo.com/) storefront. The suite is built to showcase how I structure, scale, and present UI automation work for hiring conversations.

## Snapshot
| Focus | Details |
| --- | --- |
| Purpose | Demonstrate maintainable Playwright tests and hiring-ready presentation. |
| Status | ✅ Core checkout happy-path is automated; more flows can be added quickly. |
| Tech | Playwright Test, TypeScript, Page Object Model, HTML and trace reports. |
| Author | **Santiago Garza** — QA Engineer (Manual & Automation) |

## Table of Contents
- [Purpose](#purpose)
- [Technologies & Skills Demonstrated](#technologies--skills-demonstrated)
- [Status & Progress](#status--progress)
- [Project Layout](#project-layout)
- [How the Code Is Organized](#how-the-code-is-organized)
- [Setup](#setup)
- [Running the Tests](#running-the-tests)
- [Best Practices Used](#best-practices-used)
- [CI/CD Ready](#cicd-ready)
- [Test Results & Reporting](#test-results--reporting)
- [Notes for Hiring Managers](#notes-for-hiring-managers)
- [Featured Scenario](#featured-scenario)
- [Extending for Interviews](#extending-for-interviews)
- [Contact](#contact)

## Purpose
- Present a concise, real-world automation project for hiring discussions.
- Demonstrate maintainable Playwright tests with clear structure, page objects, and reusable fixtures.
- Provide a launchpad for conversations about strategy, reliability, and CI/CD in front-end testing.

## Technologies & Skills Demonstrated
- **Playwright Test** for cross-browser automation (Chromium, Firefox, WebKit) with parallelism and retries.
- **TypeScript** for type-safe page objects and tests.
- **Page Object Model (POM)** to encapsulate UI interactions per application area.
- **Reporting & Diagnostics** via Playwright trace viewer, HTML reports, and automatic screenshots on failure.
- **Test Design** with positive flows, reusable actions, and accessibility-first locator strategies.

## Status & Progress
- ✅ Core happy-path checkout flow automated (login → add to cart → checkout → confirmation).
- ✅ Page Object Model with a `PageManager` factory for easy scaling.
- ⏳ Additional scenarios (sorting, logout, negative login, data-driven coverage) ready to be added using the same patterns.

## Project Layout
```text
pageObjects/             # Page Object Model classes
  loginPage.ts           # Login form interactions
  productsPage.ts        # Product listing and cart access
  shoppingCartPage.ts    # Cart assertions and checkout entry
  checkOutPage.ts        # Checkout form interactions
  checkOutOverview.ts    # Order summary validation
  checOutComplete.ts     # Completion page assertion
  pageManager.ts         # Factory to access all page objects
playwright.config.ts     # Shared Playwright configuration and browser matrix
package.json             # Dependencies (Playwright and TypeScript typings)
tests/                   # Playwright test suites
  SauceDemoTest.spec.ts  # Primary end-to-end purchase scenario
  example.spec.ts        # Starter Playwright sample tests
```

## How the Code Is Organized
- **Tests** (`tests/`) focus on user intent and readability, pulling actions from page objects to avoid duplication.
- **Page objects** (`pageObjects/`) expose focused actions and assertions per page (e.g., `addBackPackToCart`, `validateItemsInCart`, `checkOutInformation`).
- **PageManager** centralizes object creation and shared context so tests stay compact and consistent.
- **Configuration** (`playwright.config.ts`) sets browser projects, retries, timeouts, trace capture, and reporters.

## Setup
1. Install dependencies (Playwright downloads required browsers automatically):
   ```bash
   npm install
   ```
2. (Optional) Update `playwright.config.ts` with custom base URLs or reporters.

## Running the Tests
- Full matrix across Chromium, Firefox, and WebKit (parallelized):
  ```bash
  npx playwright test
  ```
- Target a specific browser or test file during development:
  ```bash
  npx playwright test tests/SauceDemoTest.spec.ts --project=chromium
  ```
- View the HTML report after a run:
  ```bash
  npx playwright show-report
  ```

## Best Practices Used
- **Resilient locators** based on roles, labels, and placeholders to reduce brittleness.
- **Fast feedback** through parallel execution and retries on CI.
- **Single-responsibility page objects** that separate concerns and keep tests declarative.
- **Deterministic flows** with clear assertions at each milestone (login, cart contents, checkout summary, completion state).
- **Traceability** via Playwright traces, screenshots, and HTML reports.

## CI/CD Ready
- Runs headless by default (`npx playwright test`) and produces HTML + trace artifacts suitable for pipelines.
- For GitHub Actions, reuse the Playwright template (`actions/setup-node`, `npx playwright install --with-deps`, `npx playwright test`) and publish the `playwright-report` artifact.
- JUnit/Allure reporters can be added in `playwright.config.ts` if your organization requires standardized test output.

## Test Results & Reporting
- Latest local check: `npx playwright test --list` (quick command to enumerate suites).
- For interviews, run `npx playwright test --project=chromium` and share the generated HTML report or trace archive.

## Notes for Hiring Managers
- Clean structure over volume: the primary flow is intentionally small but production-ready.
- Demonstrates ability to build from scratch (config, POM, fixtures) with rapid extension to cover edge cases or negative paths.
- Shows familiarity with modern QA tooling, diagnostics, and best practices around maintainability and readability.

## Featured Scenario
`tests/SauceDemoTest.spec.ts` covers an end-to-end buyer journey:
1. Navigate to Saucedemo and validate the landing page banner.
2. Log in with `standard_user` credentials.
3. Add the "Sauce Labs Backpack" to the cart and open the cart.
4. Assert items present, proceed to checkout, and supply shipping details.
5. Confirm the overview page, finish checkout, and verify the completion screen.

## Extending for Interviews
- Add new scenarios (sorting, logout, negative login) by copying the structure in `tests/SauceDemoTest.spec.ts` and reusing page objects.
- Demonstrate debugging chops with Playwright trace viewer (`trace: 'on-first-retry'` is enabled in the config) or headed mode (`npx playwright test --headed`).
- Extend reporting to include CI-friendly artifacts (JUnit/Allure) by adjusting `reporter` in `playwright.config.ts`.

## Contact
- **Author:** Santiago Garza — QA Engineer (Manual & Automation)
- **GitHub:** [SantiGeb](https://github.com/SantiGeb)
- **LinkedIn:** [Santiago Garza](https://www.linkedin.com/in/santiago-g-4b4564149/)
- **Email:** garzaestradasantiago@gmail.com