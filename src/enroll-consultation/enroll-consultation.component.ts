import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConsultationService } from '../services/consultation.service';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-enroll-consultation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './enroll-consultation.component.html',
  styleUrl: './enroll-consultation.component.css',
})
export class EnrollConsultationComponent {
  @Input() consultation: Doctor | undefined;
  @Output() closeModal = new EventEmitter<void>();
  @Output() appointmentConfirmed = new EventEmitter<string>(); // New EventEmitter to send the confirmation message

  selectedDateTime: string | null = null;

  confirmAppointment() {
    if (this.selectedDateTime) {
      // Store the selected appointment in localStorage or in-memory storage
      const appointments = JSON.parse(
        localStorage.getItem('appointments') || '[]'
      );
      appointments.push({
        consultationId: this.consultation!.id,
        date: this.selectedDateTime,
        name: this.consultation!.name,
        speciality: this.consultation?.specialty,
      });
      localStorage.setItem('appointments', JSON.stringify(appointments));

      // Emit confirmation message to the parent component
      this.appointmentConfirmed.emit(
        `Appointment confirmed for ${this.selectedDateTime}`
      );

      // Close the modal
      this.closeModal.emit();
    } else {
      alert('Please select a date.');
    }
  }

  closeModalHandler() {
    this.closeModal.emit();
  }
}
