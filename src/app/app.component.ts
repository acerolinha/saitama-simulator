import { Component, inject } from '@angular/core';
import { Challenges as allChallenges } from './game/Challenges';
import { Stages as allStages } from './game/Stages';
import { SaitamaService } from './services/saitama.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private saitamaService: SaitamaService = inject(SaitamaService);

  public showModal: boolean = false;
  public currentChallengeTitle: string = '';

  public get AvailableStages() {
    return allStages.filter((s) => s.stage <= this.saitamaService.Stage);
  }

  public get AvailableChallenges() {
    return allChallenges.filter((c) => c.stage <= this.saitamaService.Stage);
  }

  public onModalClosed(): void {
    this.showModal = false;
  }

  public onChallengeOpened(challengeTitle: string): void {
    this.currentChallengeTitle = challengeTitle;
    this.showModal = true;
  }
}
