import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosSolutionsPreviewComponent } from './nos-solutions-preview.component';

describe('NosSolutionsPreviewComponent', () => {
  let component: NosSolutionsPreviewComponent;
  let fixture: ComponentFixture<NosSolutionsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosSolutionsPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosSolutionsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
