import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsModule } from '../ds.module';
import { DsButtonComponent } from './ds-button.component';

describe('DsButtonComponent', () => {
  let fixture: ComponentFixture<DsButtonComponent>;
  let component: DsButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [DsModule] }).compileComponents();
    fixture = TestBed.createComponent(DsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('maps design-system variants onto Material colors', () => {
    expect(component.materialColor).toBe('primary');

    component.variant = 'secondary';
    expect(component.materialColor).toBe('accent');

    component.variant = 'danger';
    expect(component.materialColor).toBe('warn');
  });

  it('disables the underlying button while loading', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.disabled).toBeTrue();
    expect(button.getAttribute('aria-busy')).toBe('true');
  });

  it('emits pressed on click when enabled', () => {
    const spy = jasmine.createSpy('pressed');
    component.pressed.subscribe(spy);

    (fixture.nativeElement.querySelector('button') as HTMLButtonElement).click();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
