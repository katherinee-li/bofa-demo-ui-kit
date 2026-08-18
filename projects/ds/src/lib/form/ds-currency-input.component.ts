import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'bofa-currency-input',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DsCurrencyInputComponent),
            multi: true,
        },
    ],
    template: `
    <mat-form-field appearance="outline" class="bofa-currency-input">
      <mat-label>{{ label }}</mat-label>
      <span matTextPrefix>$&nbsp;</span>
      <input
        matInput
        type="number"
        inputmode="decimal"
        [value]="value"
        [disabled]="disabled"
        [attr.aria-label]="label"
        (input)="onInput($event)"
        (blur)="onTouched()"
      />
      <mat-hint *ngIf="hint">{{ hint }}</mat-hint>
    </mat-form-field>
  `,
    styles: [
        `
      .bofa-currency-input {
        width: 100%;
      }
    `,
    ],
    standalone: false
})
export class DsCurrencyInputComponent implements ControlValueAccessor {
  @Input() label = 'Amount';
  @Input() hint?: string;

  value: number | null = null;
  disabled = false;

  private onChange: (value: number | null) => void = () => undefined;
  onTouched: () => void = () => undefined;

  writeValue(value: number | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const raw = (event.target as HTMLInputElement).value;
    this.value = raw === '' ? null : Number(raw);
    this.onChange(this.value);
  }
}
