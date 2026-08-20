import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsModule } from '../ds.module';
import { DsAccountCardComponent } from './ds-account-card.component';

describe('DsAccountCardComponent', () => {
  let fixture: ComponentFixture<DsAccountCardComponent>;
  let component: DsAccountCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [DsModule] }).compileComponents();
    fixture = TestBed.createComponent(DsAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders an outlined Material card', () => {
    const card = fixture.nativeElement.querySelector('mat-card') as HTMLElement;
    expect(card.classList).toContain('mat-mdc-card-outlined');
  });

  it('masks all but the last four digits of the account number', () => {
    fixture.componentRef.setInput('accountNumber', '4147202512349876');
    fixture.detectChanges();

    expect(component.maskedNumber).toBe('•••• 9876');
    expect(fixture.nativeElement.querySelector('mat-card-subtitle').textContent).toContain('9876');
  });

  it('renders no masked number when the account number is empty', () => {
    expect(component.maskedNumber).toBe('');
  });

  it('formats the balance in the configured currency', () => {
    fixture.componentRef.setInput('balance', 1234.5);
    fixture.detectChanges();

    const balance = fixture.nativeElement.querySelector('.bofa-account-card__balance') as HTMLElement;
    expect(balance.textContent).toContain('$1,234.50');
  });
});
