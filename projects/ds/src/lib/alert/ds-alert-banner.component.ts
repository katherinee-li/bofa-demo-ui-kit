import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type DsAlertSeverity = 'info' | 'warning' | 'critical' | 'success';

@Component({
  selector: 'bofa-alert-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bofa-alert" [ngClass]="'bofa-alert--' + severity" role="status">
      <mat-icon class="bofa-alert__icon">{{ icon }}</mat-icon>
      <div class="bofa-alert__body">
        <strong class="bofa-alert__title" *ngIf="title">{{ title }}</strong>
        <ng-content></ng-content>
      </div>
      <button
        mat-icon-button
        *ngIf="dismissible"
        class="bofa-alert__dismiss"
        aria-label="Dismiss notification"
        (click)="dismissed.emit()"
      >
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
  styles: [
    `
          .bofa-alert {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 12px 16px;
            border-left: 4px solid currentColor;
            border-radius: 4px;
          }
          .bofa-alert--critical {
            color: #c8102e;
            background: #fdecee;
          }
          .bofa-alert--warning {
            color: #8a5300;
            background: #fff6e5;
          }
          .bofa-alert--info {
            color: #012169;
            background: #eaeef7;
          }
          .bofa-alert--success {
            color: #1d6b3f;
            background: #eaf6ee;
          }
          .bofa-alert__body {
            flex: 1;
          }
        `,
  ],
})
export class DsAlertBannerComponent {
  @Input() severity: DsAlertSeverity = 'info';
  @Input() title?: string;
  @Input() dismissible = false;

  @Output() dismissed = new EventEmitter<void>();

  get icon(): string {
    switch (this.severity) {
      case 'critical':
        return 'error';
      case 'warning':
        return 'warning';
      case 'success':
        return 'check_circle';
      default:
        return 'info';
    }
  }
}
