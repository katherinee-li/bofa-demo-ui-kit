import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsModule } from '../ds.module';
import { DsAlertBannerComponent } from './ds-alert-banner.component';

describe('DsAlertBannerComponent', () => {
  let fixture: ComponentFixture<DsAlertBannerComponent>;
  let component: DsAlertBannerComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [DsModule] }).compileComponents();
    fixture = TestBed.createComponent(DsAlertBannerComponent);
    component = fixture.componentInstance;
  });

  it('selects an icon per severity', () => {
    expect(component.icon).toBe('info');

    component.severity = 'critical';
    expect(component.icon).toBe('error');

    component.severity = 'warning';
    expect(component.icon).toBe('warning');

    component.severity = 'success';
    expect(component.icon).toBe('check_circle');
  });

  it('only renders the dismiss control when dismissible', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.bofa-alert__dismiss')).toBeNull();

    fixture.componentRef.setInput('dismissible', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.bofa-alert__dismiss')).not.toBeNull();
  });

  it('emits dismissed when the dismiss control is clicked', () => {
    const spy = jasmine.createSpy('dismissed');
    fixture.componentRef.setInput('dismissible', true);
    component.dismissed.subscribe(spy);
    fixture.detectChanges();

    (fixture.nativeElement.querySelector('.bofa-alert__dismiss') as HTMLButtonElement).click();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
