import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DsModule } from '../ds.module';
import { DsCurrencyInputComponent } from './ds-currency-input.component';

describe('DsCurrencyInputComponent', () => {
  let fixture: ComponentFixture<DsCurrencyInputComponent>;
  let component: DsCurrencyInputComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsModule, NoopAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(DsCurrencyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the currency symbol as a form-field text prefix', () => {
    const prefix = fixture.nativeElement.querySelector('.mat-mdc-form-field-text-prefix');
    expect(prefix).not.toBeNull();
    expect((prefix as HTMLElement).textContent?.trim()).toContain('$');
  });

  it('renders an outline form field labelled by the label input', () => {
    fixture.componentRef.setInput('label', 'Transfer amount');
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(input.getAttribute('aria-label')).toBe('Transfer amount');
    expect(fixture.nativeElement.querySelector('.mat-mdc-form-field')).not.toBeNull();
  });

  it('writes and emits numeric values, treating an empty field as null', () => {
    const emitted: (number | null)[] = [];
    component.registerOnChange((value) => emitted.push(value));

    component.writeValue(125.5);
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('125.5');

    input.value = '';
    input.dispatchEvent(new Event('input'));
    expect(emitted).toEqual([null]);
    expect(component.value).toBeNull();
  });
});
