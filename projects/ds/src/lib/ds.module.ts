import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';

import { DsAlertBannerComponent } from './alert/ds-alert-banner.component';
import { DsButtonComponent } from './button/ds-button.component';
import { DsAccountCardComponent } from './card/ds-account-card.component';
import { DsCurrencyInputComponent } from './form/ds-currency-input.component';
import { DsStatementTabsComponent } from './tabs/ds-statement-tabs.component';
import { DsTransactionTableComponent } from './table/ds-transaction-table.component';

const COMPONENTS = [
  DsAlertBannerComponent,
  DsButtonComponent,
  DsAccountCardComponent,
  DsCurrencyInputComponent,
  DsStatementTabsComponent,
  DsTransactionTableComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
  ],
  exports: [...COMPONENTS],
})
export class DsModule {}
