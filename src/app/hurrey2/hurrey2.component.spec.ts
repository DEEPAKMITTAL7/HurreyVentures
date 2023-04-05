import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hurrey2Component } from './hurrey2.component';

describe('Hurrey2Component', () => {
  let component: Hurrey2Component;
  let fixture: ComponentFixture<Hurrey2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hurrey2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hurrey2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
