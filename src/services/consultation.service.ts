import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService {
  private consultations: Doctor[] = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'General Practitioner',
      description:
        'Specialized in general health, wellness, and preventive care. Available for all general health consultations.',
    },
    {
      id: 2,
      name: 'Dr. Alice Smith',
      specialty: 'Dermatologist',
      description:
        'Expert in treating skin conditions, allergies, and dermatological consultations.',
    },
    {
      id: 3,
      name: 'Dr. Bob Johnson',
      specialty: 'Psychiatrist',
      description:
        'Experienced in mental health, therapy, and psychiatric evaluations.',
    },
    {
      id: 4,
      name: 'Dr. Emily Davis',
      specialty: 'Pain Management Specialist',
      description:
        'Specializes in pain relief therapies and chronic pain management.',
    },
  ];

  private userAppointments: { consultationId: number; date: string }[] = [];

  getConsultations() {
    return this.consultations;
  }

  getUserAppointments() {
    return this.userAppointments;
  }

  bookAppointment(consultationId: number, date: string) {
    this.userAppointments.push({ consultationId, date });
  }
}
