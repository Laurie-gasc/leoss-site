import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsFortsComponent } from './points-forts.component';

describe('PointsFortsComponent', () => {
  let component: PointsFortsComponent;
  let fixture: ComponentFixture<PointsFortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointsFortsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointsFortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
