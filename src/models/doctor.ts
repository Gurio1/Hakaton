export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: 'Д-р Алис Смит',
    specialty: 'Дерматолог',
    description:
      'Експерт в лечението на кожни заболявания, алергии и дерматологични консултации.',
  },
  {
    id: 2,
    name: 'Д-р Боб Джонсън',
    specialty: 'Психиатър',
    description:
      'С опит в областта на психичното здраве, терапията и психиатричните оценки.',
  },
  {
    id: 3,
    name: 'Д-р Емили Дейвис',
    specialty: 'Специалист по управление на болката',
    description:
      'Специализира в терапии за облекчаване на болката и управление на хроничната болка.',
  },
];
