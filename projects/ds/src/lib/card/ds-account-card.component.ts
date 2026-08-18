import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'bofa-account-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <mat-card class="bofa-account-card" appearance="outlined">
      <mat-card-header>
        <mat-card-title>{{ accountName }}</mat-card-title>
        <mat-card-subtitle>{{ maskedNumber }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p class="bofa-account-card__balance">{{ balance | currency : currencyCode }}</p>
        <ng-content></ng-content>
      </mat-card-content>
      <mat-card-actions align="end">
        <ng-content select="[cardActions]"></ng-content>
      </mat-card-actions>
    </mat-card>
  `,
    styles: [
        `
      .bofa-account-card__balance {
        font-size: 28px;
        font-weight: 600;
        margin: 8px 0 0;
      }
    `,
    ],
    standalone: false
})
export class DsAccountCardComponent {
  @Input() accountName = '';
  @Input() accountNumber = '';
  @Input() balance = 0;
  @Input() currencyCode = 'USD';

  get maskedNumber(): string {
    const last4 = this.accountNumber.slice(-4);
    return last4 ? `•••• ${last4}` : '';
  }
}
