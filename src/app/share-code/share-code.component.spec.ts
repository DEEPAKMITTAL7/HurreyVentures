import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCodeComponent } from './share-code.component';

describe('ShareCodeComponent', () => {
  let component: ShareCodeComponent;
  let fixture: ComponentFixture<ShareCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
