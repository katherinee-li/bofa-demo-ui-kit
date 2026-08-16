/*
 * Public API surface of @bofa/ds
 *
 * Consumed by downstream retail banking applications. Anything exported here is a
 * compatibility contract: removals and signature changes break consumer builds.
 */

export * from './lib/ds.module';
export * from './lib/alert/ds-alert-banner.component';
export * from './lib/button/ds-button.component';
export * from './lib/card/ds-account-card.component';
export * from './lib/form/ds-currency-input.component';
export * from './lib/tabs/ds-statement-tabs.component';
export * from './lib/table/ds-transaction-table.component';
export * from './lib/theme/ds-theme.service';
