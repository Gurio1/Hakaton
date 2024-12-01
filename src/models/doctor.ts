export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: 0,
    name: 'Dr. John Doe',
    specialty: 'General Practitioner',
    description:
      'Specialized in general health, wellness, and preventive care. Available for all general health consultations.',
  },
  {
    id: 1,
    name: 'Dr. Alice Smith',
    specialty: 'Dermatologist',
    description:
      'Expert in treating skin conditions, allergies, and dermatological consultations.',
  },
  {
    id: 2,
    name: 'Dr. Bob Johnson',
    specialty: 'Psychiatrist',
    description:
      'Experienced in mental health, therapy, and psychiatric evaluations.',
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    specialty: 'Pain Management Specialist',
    description:
      'Specializes in pain relief therapies and chronic pain management.',
  },
];
