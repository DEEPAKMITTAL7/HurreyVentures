import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level3GameComponent } from './level3-game.component';

describe('Level3GameComponent', () => {
  let component: Level3GameComponent;
  let fixture: ComponentFixture<Level3GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level3GameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level3GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
