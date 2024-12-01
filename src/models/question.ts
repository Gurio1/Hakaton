export interface Question {
  id: number;
  question: string;
  options: string[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Какъв е основният ви здравословен проблем?',
    options: [
      'Общ преглед на здравето',
      'Кожни проблеми',
      'Психично здраве',
      'Управление на болката',
    ],
  },
  {
    id: 2,
    question: 'Имате ли някакви текущи медицински състояния?',
    options: ['Да', 'Не'],
  },
  {
    id: 3,
    question: 'Изпитвате ли някаква болка?',
    options: ['Да', 'Не'],
  },
  {
    id: 4,
    question: 'Посещавали ли сте лекар наскоро?',
    options: ['Да', 'Не'],
  },
  {
    id: 5,
    question: 'В коя възрастова група попадате?',
    options: ['18-30', '31-50', '51+'],
  },
];
