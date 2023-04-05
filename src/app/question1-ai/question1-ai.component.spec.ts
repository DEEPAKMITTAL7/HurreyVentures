import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1AiComponent } from './question1-ai.component';

describe('Question1AiComponent', () => {
  let component: Question1AiComponent;
  let fixture: ComponentFixture<Question1AiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question1AiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question1AiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
