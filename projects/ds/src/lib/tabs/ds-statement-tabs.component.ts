import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface DsStatementPeriod {
  label: string;
  periodId: string;
  documentCount: number;
}

/**
 * Statement period switcher. Still on the pre-MDC Material tabs implementation
 * inherited from the original build; the rest of the library has moved on.
 */
@Component({
  selector: 'bofa-statement-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-tab-group
      class="bofa-statement-tabs"
      [selectedIndex]="selectedIndex"
      (selectedIndexChange)="periodChanged.emit(periods[$event]?.periodId)"
    >
      <mat-tab *ngFor="let period of periods" [label]="period.label">
        <ng-template matTabContent>
          <p class="bofa-statement-tabs__count">
            {{ period.documentCount }} statement(s) available for {{ period.label }}
          </p>
          <ng-content></ng-content>
        </ng-template>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [
    `
          .bofa-statement-tabs__count {
            padding: 16px 8px;
            margin: 0;
          }
        `,
  ],
})
export class DsStatementTabsComponent {
  @Input() periods: DsStatementPeriod[] = [];
  @Input() selectedIndex = 0;

  @Output() periodChanged = new EventEmitter<string | undefined>();
}
