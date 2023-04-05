import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1GameComponent } from './level1-game.component';

describe('Level1GameComponent', () => {
  let component: Level1GameComponent;
  let fixture: ComponentFixture<Level1GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level1GameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level1GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
