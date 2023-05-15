import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Challenges } from 'src/app/game/Challenges';

@Component({
  selector: 'app-challenge-modal',
  templateUrl: './challenge-modal.component.html',
  styleUrls: ['./challenge-modal.component.scss'],
})
export class ChallengeModalComponent {
  @Input() currentChallengeTitle!: string;

  @Output() modalClosed = new EventEmitter();

  @ViewChild('challengeContent', { read: ViewContainerRef })
  challengeContent!: ViewContainerRef;

  public showModal: boolean = false;

  public challengeTitle: string = '';

  public closeModal(): void {
    this.modalClosed.emit();
  }

  public ngAfterViewInit() {
    const currentChallange = Challenges.find(
      (c) => (c.title = this.currentChallengeTitle)
    )!;
    this.challengeContent.clear();
    const challengeComponent = this.challengeContent.createComponent(
      currentChallange!.component
    );
    challengeComponent.changeDetectorRef.detectChanges();
  }
}
