import { Component } from '@angular/core';
import { SaitamaService } from 'src/app/services/saitama.service';

@Component({
  selector: 'app-base-challenge',
  templateUrl: './base-challenge.component.html',
  styleUrls: ['./base-challenge.component.scss'],
})
export class BaseChallengeComponent {
  private currentState!: number;

  constructor(protected saitamaService: SaitamaService) {}

  public get State(): number {
    return this.currentState;
  }

  public set State(state: number) {
    this.currentState = state;
  }
}
