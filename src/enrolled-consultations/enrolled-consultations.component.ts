import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-enrolled-consultations',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './enrolled-consultations.component.html',
  styleUrl: './enrolled-consultations.component.css',
})
export class EnrolledConsultationsComponent implements OnInit {
  enrolledConsultations: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadEnrolledConsultations();
  }

  // Load enrolled consultations from localStorage
  loadEnrolledConsultations(): void {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      this.enrolledConsultations = JSON.parse(storedAppointments);
    }
  }

  formatDate(date: string): string {
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    const dateObj = new Date(date);
    const formattedTime = dateObj.toLocaleTimeString('en-US', timeOptions);

    return `${dateObj.toLocaleDateString()} at ${formattedTime}`;
  }
}
