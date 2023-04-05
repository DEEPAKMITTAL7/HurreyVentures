import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2MetaverseComponent } from './question2-metaverse.component';

describe('Question2MetaverseComponent', () => {
  let component: Question2MetaverseComponent;
  let fixture: ComponentFixture<Question2MetaverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question2MetaverseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question2MetaverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
