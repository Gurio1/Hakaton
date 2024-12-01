import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledConsultationsComponent } from './enrolled-consultations.component';

describe('EnrolledConsultationsComponent', () => {
  let component: EnrolledConsultationsComponent;
  let fixture: ComponentFixture<EnrolledConsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrolledConsultationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolledConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
