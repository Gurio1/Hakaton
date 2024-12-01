import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../services/consultation.service';
import { NgFor, NgIf } from '@angular/common';
import { EnrollConsultationComponent } from '../enroll-consultation/enroll-consultation.component';
import { Doctor, DOCTORS } from '../models/doctor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultations',
  standalone: true,
  imports: [NgFor, EnrollConsultationComponent, NgIf],
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css'],
})
export class ConsultationsComponent implements OnInit {
  consultations = DOCTORS;
  showModal = false;
  selectedConsultation: Doctor | undefined;
  notificationMessage: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const consultationId = params['consultationId'];
      if (consultationId) {
        this.openSignUpModal(parseInt(consultationId, 10));
      }
    });
  }

  openSignUpModal(consultationId: number): void {
    this.selectedConsultation = this.consultations.find(
      (c) => c.id === consultationId
    );
    if (this.selectedConsultation) {
      this.showModal = true;
    }
  }

  closeSignUpModal(): void {
    this.showModal = false;
    this.router.navigate([], { queryParams: {} }); // Clear query params after closing modal
  }

  // Method to handle the confirmation message from the modal
  handleAppointmentConfirmation(message: string): void {
    this.notificationMessage = message;

    console.log(message);

    // Hide the notification after 3 seconds
    setTimeout(() => {
      this.notificationMessage = null;
    }, 3000);
  }
}
