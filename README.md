# @bofa/ds — shared retail design system

Angular component library layered over Angular Material, consumed by downstream retail banking
applications (see `katherinee-li/bofa-demo-app`).

**Demo asset.** This repo stands in for a bank-internal shared component library during a migration
demo: the situation it models is an Angular 14→18 upgrade where downstream teams must not break.

## Current state

| Item | Value |
|---|---|
| Angular | 16.2.x |
| Angular Material | 16.2.x |
| Node | 18.x (Angular 16 supports `^16.14 \|\| ^18.10`) |
| Library version | 3.2.0 |

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
- `projects/ds/src/lib/tabs/ds-statement-tabs.component.ts` still uses the pre-MDC
  `@angular/material/legacy-tabs` entry point, which Angular Material removes in v17 — a real, not
  hypothetical, upgrade blocker.

## CI

`.github/workflows/ci.yml` runs the library build and unit tests, then a **downstream consumer build**
job that clones the consumer app and builds it against the freshly packed library. Non-breakage is
demonstrated by that job, not asserted in a PR description.
