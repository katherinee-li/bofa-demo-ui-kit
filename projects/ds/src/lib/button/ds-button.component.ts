import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type DsButtonVariant = 'primary' | 'secondary' | 'danger';

@Component({
  selector: 'bofa-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      mat-raised-button
      class="bofa-button"
      [ngClass]="'bofa-button--' + variant"
      [color]="materialColor"
      [disabled]="disabled || loading"
      [attr.aria-busy]="loading"
      (click)="pressed.emit($event)"
    >
      <mat-spinner *ngIf="loading" class="bofa-button__spinner" diameter="18"></mat-spinner>
      <span class="bofa-button__label"><ng-content></ng-content></span>
    </button>
  `,
  styles: [
    `
      .bofa-button__spinner {
        display: inline-block;
        margin-right: 8px;
        vertical-align: middle;
      }
      .bofa-button--danger {
        --bofa-button-bg: #c8102e;
      }
    `,
  ],
})
export class DsButtonComponent {
  @Input() variant: DsButtonVariant = 'primary';
  @Input() disabled = false;
  @Input() loading = false;

  @Output() pressed = new EventEmitter<MouseEvent>();

  get materialColor(): 'primary' | 'accent' | 'warn' {
    switch (this.variant) {
      case 'danger':
        return 'warn';
      case 'secondary':
        return 'accent';
      default:
        return 'primary';
    }
  }
}
