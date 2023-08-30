import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFeedbacksComponent } from './section-feedbacks.component';

describe('SectionFeedbacksComponent', () => {
  let component: SectionFeedbacksComponent;
  let fixture: ComponentFixture<SectionFeedbacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionFeedbacksComponent]
    });
    fixture = TestBed.createComponent(SectionFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
