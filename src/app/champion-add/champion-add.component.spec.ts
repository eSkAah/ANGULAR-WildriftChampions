import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionAddComponent } from './champion-add.component';

describe('ChampionAddComponent', () => {
  let component: ChampionAddComponent;
  let fixture: ComponentFixture<ChampionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
