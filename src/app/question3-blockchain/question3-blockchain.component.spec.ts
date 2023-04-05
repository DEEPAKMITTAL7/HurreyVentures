import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3BlockchainComponent } from './question3-blockchain.component';

describe('Question3BlockchainComponent', () => {
  let component: Question3BlockchainComponent;
  let fixture: ComponentFixture<Question3BlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question3BlockchainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question3BlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
