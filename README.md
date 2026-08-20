# @bofa/ds — Retail Banking Design System

Angular component library providing reusable UI components for retail banking applications. Built on Angular Material with custom theming and branding.

Requires Angular 15 and Angular Material 15 (MDC-based components) in the consuming application.

## Installation

```bash
npm install @bofa/ds
```

## Usage

```typescript
import { DsModule } from '@bofa/ds';

@NgModule({
  imports: [
    DsModule,
    // ... other imports
  ]
})
export class AppModule { }
```

## Components

- **Account Cards**: Display account information with balances and actions
- **Alert Banners**: Dismissible notifications for important messages
- **Buttons**: Primary, secondary, and danger variants with loading states
- **Currency Input**: Formatted currency input with validation
- **Statement Tabs**: Period switcher for documents and statements
- **Transaction Tables**: Sortable data tables with pagination

## Theming

The library includes a custom design system with the BofA brand colors and typography. Configure your application to use the theme:

```scss
@use '@bofa/ds/src/styles/theme' as ds;

@include ds.bofa-design-system();
```

## Development

```bash
npm ci
npx ng build ds
npx ng test ds --watch=false --browsers=ChromeHeadless
```

## Building

```bash
npx ng build ds
cd dist/ds && npm pack
```

## API Contract

The public API is defined in `projects/ds/src/public-api.ts`. Changes to exported components, selectors, or interfaces require a major version bump per our semantic versioning policy.

## Versioning

This project follows semantic versioning. Current version: 2.0.0

`2.0.0` upgrades the library to Angular 15. The exported TypeScript API is unchanged, but Angular Material 15 replaces the component internals with the MDC implementations, so consumers must be on Angular/Material 15 and any styles targeting internal `.mat-*` class names need to be re-pointed at their `.mat-mdc-*` equivalents.

## CI/CD

The library includes automated testing and downstream compatibility checks to ensure changes don't break consumer applications.
