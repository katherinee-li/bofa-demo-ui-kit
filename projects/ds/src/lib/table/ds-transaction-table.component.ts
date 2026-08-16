import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface DsTransaction {
  postedAt: string;
  description: string;
  category: string;
  amount: number;
}

@Component({
  selector: 'bofa-transaction-table',
  template: `
    <table mat-table [dataSource]="dataSource" matSort class="bofa-transaction-table">
      <ng-container matColumnDef="postedAt">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>
        <td mat-cell *matCellDef="let row">{{ row.postedAt | date : 'mediumDate' }}</td>
      </ng-container>

      <ng-container matColumnDef="description">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>
        <td mat-cell *matCellDef="let row">{{ row.description }}</td>
      </ng-container>

      <ng-container matColumnDef="category">
        <th mat-header-cell *matHeaderCellDef>Category</th>
        <td mat-cell *matCellDef="let row">{{ row.category }}</td>
      </ng-container>

      <ng-container matColumnDef="amount">
        <th mat-header-cell *matHeaderCellDef mat-sort-header class="bofa-cell--numeric">Amount</th>
        <td mat-cell *matCellDef="let row" class="bofa-cell--numeric">
          {{ row.amount | currency }}
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
    <mat-paginator [pageSizeOptions]="[10, 25, 50]" showFirstLastButtons></mat-paginator>
  `,
  styles: [
    `
      .bofa-transaction-table {
        width: 100%;
      }
      .bofa-cell--numeric {
        text-align: right;
      }
    `,
  ],
})
export class DsTransactionTableComponent implements OnChanges, AfterViewInit {
  @Input() transactions: DsTransaction[] = [];
  @Input() displayedColumns: string[] = ['postedAt', 'description', 'category', 'amount'];

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  readonly dataSource = new MatTableDataSource<DsTransaction>([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['transactions']) {
      this.dataSource.data = this.transactions ?? [];
    }
  }

  ngAfterViewInit(): void {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
