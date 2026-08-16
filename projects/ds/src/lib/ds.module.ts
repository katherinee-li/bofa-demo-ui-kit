import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

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
