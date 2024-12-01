import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() message: string = ''; // Message to display in the modal
  @Input() id!: number; // Additional data for navigation
  @Output() closeModal = new EventEmitter<void>(); // Event to close the modal

  constructor(private router: Router) {}

  redirectToConsultation(): void {
    this.router.navigate(['/consultations'], {
      queryParams: { consultationId: this.id },
    });
  }
}
