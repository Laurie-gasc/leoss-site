import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionsLegalesModalComponent } from './mentions-legales-modal.component';

describe('MentionsLegalesModalComponent', () => {
  let component: MentionsLegalesModalComponent;
  let fixture: ComponentFixture<MentionsLegalesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentionsLegalesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionsLegalesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
