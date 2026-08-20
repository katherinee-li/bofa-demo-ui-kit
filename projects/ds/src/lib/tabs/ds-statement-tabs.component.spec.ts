import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DsModule } from '../ds.module';
import { DsStatementPeriod, DsStatementTabsComponent } from './ds-statement-tabs.component';

const PERIODS: DsStatementPeriod[] = [
  { label: 'January 2026', periodId: '2026-01', documentCount: 2 },
  { label: 'February 2026', periodId: '2026-02', documentCount: 1 },
];

describe('DsStatementTabsComponent', () => {
  let fixture: ComponentFixture<DsStatementTabsComponent>;
  let component: DsStatementTabsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsModule, NoopAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(DsStatementTabsComponent);
    component = fixture.componentInstance;
  });

  it('renders a tab label per statement period', () => {
    fixture.componentRef.setInput('periods', PERIODS);
    fixture.detectChanges();

    const labels = fixture.nativeElement.querySelectorAll('.mat-mdc-tab');
    expect(labels.length).toBe(2);
    expect((labels[0] as HTMLElement).textContent).toContain('January 2026');
  });

  it('lazily renders the document count of the selected period', () => {
    fixture.componentRef.setInput('periods', PERIODS);
    fixture.detectChanges();

    const count = fixture.nativeElement.querySelector('.bofa-statement-tabs__count') as HTMLElement;
    expect(count.textContent).toContain('2 statement(s) available for January 2026');
  });

  it('emits the period id when the selected index changes', async () => {
    const emitted: (string | undefined)[] = [];
    component.periodChanged.subscribe((periodId) => emitted.push(periodId));
    fixture.componentRef.setInput('periods', PERIODS);
    fixture.detectChanges();

    fixture.componentRef.setInput('selectedIndex', 1);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(emitted).toEqual(['2026-02']);
  });
});
