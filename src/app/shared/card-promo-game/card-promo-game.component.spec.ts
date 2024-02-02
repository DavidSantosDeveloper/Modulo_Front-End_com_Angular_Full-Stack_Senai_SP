import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPromoGameComponent } from './card-promo-game.component';

describe('CardPromoGameComponent', () => {
  let component: CardPromoGameComponent;
  let fixture: ComponentFixture<CardPromoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPromoGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPromoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
