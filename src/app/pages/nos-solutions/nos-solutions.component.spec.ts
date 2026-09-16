import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosSolutionsComponent } from './nos-solutions.component';

describe('NosSolutionsComponent', () => {
  let component: NosSolutionsComponent;
  let fixture: ComponentFixture<NosSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
