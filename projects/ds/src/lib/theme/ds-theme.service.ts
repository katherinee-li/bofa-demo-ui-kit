import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type DsThemeMode = 'light' | 'dark' | 'high-contrast';

@Injectable({ providedIn: 'root' })
export class DsThemeService {
  private readonly mode$ = new BehaviorSubject<DsThemeMode>('light');

  get changes(): Observable<DsThemeMode> {
    return this.mode$.asObservable();
  }

  get current(): DsThemeMode {
    return this.mode$.value;
  }

  setMode(mode: DsThemeMode): void {
    const root = document.documentElement;
    root.classList.remove('bofa-theme--light', 'bofa-theme--dark', 'bofa-theme--high-contrast');
    root.classList.add(`bofa-theme--${mode}`);
    this.mode$.next(mode);
  }
}
