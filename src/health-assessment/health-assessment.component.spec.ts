import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAssessmentComponent } from './health-assessment.component';

describe('QuestionComponent', () => {
  let component: HealthAssessmentComponent;
  let fixture: ComponentFixture<HealthAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthAssessmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HealthAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
