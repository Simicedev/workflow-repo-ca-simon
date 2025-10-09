

# Workflow CA

Modern front‑end coursework project featuring Tailwind-driven UI, API consumption, unit + E2E test automation, and a lightweight buildless setup.

</div>

---

## Overview

This repository demonstrates a simple Holidaze‑style venue listing + details flow with authentication (login / register) and a minimal JavaScript architecture:

- Vanilla JS
- Tailwind CSS
- Vitest for fast unit tests
- Playwright for realistic browser E2E flows
- Husky + lint-staged for pre‑commit

---

## ✅ Prerequisites

- Node.js
- npm (bundled with Node)

Check versions:
```
node -v
npm -v
```

---

## 🚀 Getting Started

Install dependencies:
```
npm install
```


### Start the development environment
```
npm run dev
```

Then open the shown local URL in a browser (default assumptions use port 5173 in Playwright config; adapt if different).

---

## 📁 Project Structure (trimmed)

```
├── index.html              # Home (lists venues)
├── login/                  # Login page
├── register/               # Register page
├── venue/                  # Venue details page
├── js/
│   ├── api/                # API calls (auth, venues)
│   ├── listeners/          # Event / page initializers
│   ├── ui/                 # UI rendering helpers
│   └── utils/              # Utilities (storage, path helpers)
├── css/                    # Tailwind input + generated CSS
├── tests/
│   ├── unit/               # Vitest unit tests
│   └── e2e/                # Playwright specs
├── vitest.config.js        # Vitest config (excludes e2e)
├── playwright.config.js    # Playwright config (auto dev server)
├── .env.example            # Sample env vars (copy to .env)
└── .gitignore
```

---

## 🧪 Testing

### Unit Tests (Vitest)
Run all unit tests:
```
npm run test
```

Interactive/UI watch mode:
```
npm run test:ui
```

Vitest is configured to only pick up `tests/unit/**/*.test.js` so E2E specs do not fail during unit runs.

### End‑to‑End (Playwright)

1. Create your local env file:
```
cp .env.example .env   # On Windows PowerShell: Copy-Item .env.example .env
```
2. Fill in valid test credentials (see Variables section below).
3. Run the E2E suite:
```
npm run test:e2e
```
4. Open the latest HTML report:
```
npx playwright show-report
```

Included E2E scenarios:
- Login success (skips if env credentials not set)
- Login failure (invalid credentials displays error)
- Navigation + venue details drilldown (home → click first venue → heading check)

---

## Environment Variables

Create a `.env` file (never commit it). The following variable names are required for certain tests:

```
TEST_USER_EMAIL= 
TEST_USER_PASSWORD=
```

An example file is provided as `.env.example` — copy it before editing. Values are intentionally omitted here.

---

## 🛠 Available npm Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Run Tailwind CLI watcher & serve assets (expects a static server or preview) |
| `npm run test` | Run unit tests once (Vitest) |
| `npm run test:ui` | Watch / interactive Vitest mode |
| `npm run test:e2e` | Run Playwright end‑to‑end tests (auto-spawns dev server) |
| `npm run lint` | Lint all JavaScript files with ESLint |
| `npm run prepare` | Husky install hook (runs automatically on install) |

---

## 🧹 Code Quality

- **ESLint**: Static analysis
- **Prettier**: Consistent formatting
- **lint-staged**: Runs `prettier --write` and `eslint --fix` on staged JS/HTML
- **Husky**: Enforces the pre-commit pipeline


## 🧩 Adding Tests

Place new unit tests in `tests/unit/` with the suffix `.test.js`. Example naming:
```
tests/unit/myUtility.test.js
```
E2E specs belong in `tests/e2e/` and use Playwright's `test` API.

---

## 📜 License

Educational coursework – adjust/add a license if distributing further.

---

## 👤 Author

SimIceDev

---

Feel free to open issues or suggest improvements.