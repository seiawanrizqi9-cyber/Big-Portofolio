import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'IntiFinance',
    description:
      'Multi tenant finance management application with authentication and role based access.',
    technologies: [
      'NestJS',
      'MongoDB',
      'JWT',
      'TypeScript',
    ],
    featured: true,
  },
];