import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionDeleteComponent } from './champion-delete.component';

describe('ChampionDeleteComponent', () => {
  let component: ChampionDeleteComponent;
  let fixture: ComponentFixture<ChampionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
