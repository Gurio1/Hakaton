export interface Question {
  id: number;
  question: string;
  options: string[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'What is your primary concern?',
    options: [
      'General health check',
      'Skin issues',
      'Mental health',
      'Pain management',
    ],
  },
  {
    id: 2,
    question: 'Do you have any ongoing medical conditions?',
    options: ['Yes', 'No'],
  },
  {
    id: 3,
    question: 'Are you experiencing any pain?',
    options: ['Yes', 'No'],
  },
  {
    id: 4,
    question: 'Have you visited a doctor recently?',
    options: ['Yes', 'No'],
  },
  {
    id: 5,
    question: 'What age group do you fall into?',
    options: ['18-30', '31-50', '51+'],
  },
  {
    id: 6,
    question: 'Do you have any allergies?',
    options: ['Yes', 'No'],
  },
  {
    id: 7,
    question: 'Do you have a family history of any chronic conditions?',
    options: ['Yes', 'No'],
  },
  {
    id: 8,
    question: 'Are you currently taking any medication?',
    options: ['Yes', 'No'],
  },
  {
    id: 9,
    question: 'Do you prefer in-person or online consultations?',
    options: ['In-person', 'Online'],
  },
  {
    id: 10,
    question: 'What is your preferred consultation time?',
    options: ['Morning', 'Afternoon', 'Evening'],
  },
];
