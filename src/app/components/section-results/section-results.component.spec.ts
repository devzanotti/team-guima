import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionResultsComponent } from './section-results.component';

describe('SectionResultsComponent', () => {
  let component: SectionResultsComponent;
  let fixture: ComponentFixture<SectionResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionResultsComponent]
    });
    fixture = TestBed.createComponent(SectionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
