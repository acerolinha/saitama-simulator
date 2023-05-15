import { BaseChallengeComponent } from '../components/challenges/base-challenge/base-challenge.component';

export interface IChallenge {
  stage: number;
  title: string;
  description: string;
  component: typeof BaseChallengeComponent;
}
