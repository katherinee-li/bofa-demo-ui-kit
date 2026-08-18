# @bofa/ds — shared retail design system

Angular component library layered over Angular Material, consumed by downstream retail banking
applications (see `katherinee-li/bofa-demo-app`).

**Demo asset.** This repo stands in for a bank-internal shared component library during a migration
demo: the situation it models is an Angular 14→18 upgrade where downstream teams must not break. Currently at Angular 18.2.x.

## Current state

| Item | Value |
|---|---|
| Angular | 18.2.x |
| Angular Material | 18.2.x |
| Node | 18.x (Angular 18 supports `^18.13.1 \|\| ^20.9.0`) |
| Library version | 5.0.0 |

## Commands

```bash
npm ci
npx ng build ds                                        # builds to dist/ds
npx ng test ds --watch=false --browsers=ChromeHeadless # 9 specs
cd dist/ds && npm pack                                 # artifact consumers install
```

## Why the structure matters for the migration

- `projects/ds/src/public-api.ts` is the compatibility contract. Removing or changing an export breaks
  every downstream consumer build.
- `projects/ds/src/styles/_theme.scss` holds the custom design system layered over Material theming
  (`define-light-theme`, `define-typography-config`), which is where Material's theming API changes
  land during an upgrade.
- `projects/ds/src/lib/tabs/ds-statement-tabs.component.ts` now uses the MDC-based
  `@angular/material/tabs` entry point — the legacy tabs migration has been completed.
- `projects/ds/src/styles/_theme.scss` now uses the Angular 18 Material theming API
  with `m2-` prefixed functions (e.g., `mat.m2-define-light-theme`).

## CI

`.github/workflows/ci.yml` runs the library build and unit tests, then a **downstream consumer build**
job that clones the consumer app and builds it against the freshly packed library. Non-breakage is
demonstrated by that job, not asserted in a PR description.
