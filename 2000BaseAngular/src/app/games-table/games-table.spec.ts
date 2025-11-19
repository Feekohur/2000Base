import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesTable } from './games-table';

describe('GamesTable', () => {
  let component: GamesTable;
  let fixture: ComponentFixture<GamesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
