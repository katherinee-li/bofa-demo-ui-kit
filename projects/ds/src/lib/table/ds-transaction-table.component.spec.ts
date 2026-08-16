import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DsModule } from '../ds.module';
import { DsTransaction, DsTransactionTableComponent } from './ds-transaction-table.component';

const TRANSACTIONS: DsTransaction[] = [
  { postedAt: '2026-01-04', description: 'Coffee', category: 'Dining', amount: -4.75 },
  { postedAt: '2026-01-05', description: 'Payroll', category: 'Income', amount: 2400 },
];

describe('DsTransactionTableComponent', () => {
  let fixture: ComponentFixture<DsTransactionTableComponent>;
  let component: DsTransactionTableComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsModule, NoopAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(DsTransactionTableComponent);
    component = fixture.componentInstance;
  });

  it('pushes input transactions into the data source', () => {
    component.transactions = TRANSACTIONS;
    component.ngOnChanges({
      transactions: { currentValue: TRANSACTIONS, previousValue: [], firstChange: true, isFirstChange: () => true },
    });

    expect(component.dataSource.data.length).toBe(2);
  });

  it('treats a null transaction list as empty rather than throwing', () => {
    component.transactions = null as unknown as DsTransaction[];
    component.ngOnChanges({
      transactions: { currentValue: null, previousValue: [], firstChange: true, isFirstChange: () => true },
    });

    expect(component.dataSource.data).toEqual([]);
  });

  it('renders a header cell per displayed column', () => {
    component.transactions = TRANSACTIONS;
    fixture.detectChanges();

    const headers = fixture.nativeElement.querySelectorAll('th');
    expect(headers.length).toBe(component.displayedColumns.length);
  });
});
