import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2GameComponent } from './level2-game.component';

describe('Level2GameComponent', () => {
  let component: Level2GameComponent;
  let fixture: ComponentFixture<Level2GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level2GameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level2GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
