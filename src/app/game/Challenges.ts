import { BlackFridayComponent } from '../components/challenges/black-friday/black-friday.component';
import { IChallenge } from '../models/IChallenge';

export const Challenges: IChallenge[] = [
  {
    stage: 8,
    title: 'Comprar na Black Friday',
    description:
      'Você conseguirá sobreviver a uma multidão desesperada para comprar na maior liquidaçâo do ano?',
    component: BlackFridayComponent,
  },
];
