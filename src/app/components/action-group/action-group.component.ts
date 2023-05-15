import { Component, Input, inject } from '@angular/core';
import { SaitamaService } from 'src/app/services/saitama.service';

@Component({
  selector: 'app-action-group',
  templateUrl: './action-group.component.html',
  styleUrls: ['./action-group.component.scss'],
})
export class ActionGroupComponent {
  @Input() actionTitle!: string;
  @Input() reward!: number;
  @Input() time!: number;

  private timeElapsed: number = 0;
  public isPerforming: boolean = false;

  private saitamaService: SaitamaService = inject(SaitamaService);

  public performAction(): void {
    this.isPerforming = true;
    const updateProgressInterval = setInterval(() => {
      this.timeElapsed += 0.1;
      if (this.timeElapsed >= this.time) {
        this.timeElapsed = 0;
        this.isPerforming = false;
        this.saitamaService.earn(this.reward);
        clearInterval(updateProgressInterval);
      }
    }, 100);
  }

  public get Progress(): number {
    return 100 * (this.timeElapsed / this.time);
  }
}
