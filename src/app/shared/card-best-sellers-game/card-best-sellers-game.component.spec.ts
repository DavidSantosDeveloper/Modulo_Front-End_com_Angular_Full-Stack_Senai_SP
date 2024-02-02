import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBestSellersGameComponent } from './card-best-sellers-game.component';

describe('CardBestSellersGameComponent', () => {
  let component: CardBestSellersGameComponent;
  let fixture: ComponentFixture<CardBestSellersGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBestSellersGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBestSellersGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
