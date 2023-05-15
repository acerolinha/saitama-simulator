import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SaitamaService } from 'src/app/services/saitama.service';

@Component({
  selector: 'app-challenge-group',
  templateUrl: './challenge-group.component.html',
  styleUrls: ['./challenge-group.component.scss'],
})
export class ChallengeGroupComponent {
  @Input() challengeTitle!: string;
  @Input() challengeDescription!: string;
  @Input() challengeStage!: number;
  @Input() challengeComponent!: Component;
  @Output() challengeOpened = new EventEmitter<string>();

  constructor(private saitamaService: SaitamaService) {}

  public get AlreadyWon(): boolean {
    return this.challengeStage < this.saitamaService.Stage;
  }

  public beginChallenge(): void {
    this.challengeOpened.emit(this.challengeTitle);
  }
}
