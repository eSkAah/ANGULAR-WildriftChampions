import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionPutComponent } from './champion-put.component';

describe('ChampionPutComponent', () => {
  let component: ChampionPutComponent;
  let fixture: ComponentFixture<ChampionPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionPutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
