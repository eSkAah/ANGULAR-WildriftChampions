import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsViewComponent } from './champions-view.component';

describe('ChampionsViewComponent', () => {
  let component: ChampionsViewComponent;
  let fixture: ComponentFixture<ChampionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
