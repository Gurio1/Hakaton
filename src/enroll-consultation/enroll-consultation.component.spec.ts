import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollConsultationComponent } from './enroll-consultation.component';

describe('EnrollConsultationComponent', () => {
  let component: EnrollConsultationComponent;
  let fixture: ComponentFixture<EnrollConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
