import { Component, ElementRef, ViewChild } from '@angular/core';
import { SaitamaService } from 'src/app/services/saitama.service';
import { BaseChallengeComponent } from '../base-challenge/base-challenge.component';

const BLACK_FRIDAY_COOLDOWN = 9;
const BLACK_FRIDAY_DURATION = 15;

@Component({
  selector: 'app-black-friday',
  templateUrl: './black-friday.component.html',
  styleUrls: ['./black-friday.component.scss'],
})
export class BlackFridayComponent extends BaseChallengeComponent {
  public countdown: number = 0;
  public itemX: number = 0;
  public itemY: number = 0;
  public itemRotation: number = 0;
  public itemId: number = 0;
  public boughtItems: number = 0;
  public won: boolean = false;

  @ViewChild('minigameContainer', { read: ElementRef })
  minigameContainer!: ElementRef;

  constructor(saitamaService: SaitamaService) {
    super(saitamaService);
    this.State = 0;
  }

  ngAfterContentInit() {
    this.setState(0);
  }

  public get Countdown(): string {
    return this.countdown.toString().padStart(2, '0');
  }

  public setState(state: number) {
    this.State = state;
    if (this.State === 0) {
      this.countdown = BLACK_FRIDAY_COOLDOWN;
      const countdownInterval = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(countdownInterval);
          this.setState(1);
        }
      }, 1000);
      return;
    }
    if (this.State === 1) {
      this.countdown = BLACK_FRIDAY_DURATION;
      const countdownInterval = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(countdownInterval);
          this.setState(2);
        }
      }, 1000);
      return;
    }
    if (this.State === 2) {
      if (this.boughtItems >= 25) {
        this.won = true;
      } else {
        this.won = false;
      }
      this.saitamaService.completeChallenge();
    }
  }

  public buyItem(): void {
    this.itemX = this.randomInRange(0, this.ContainerWidth * 0.9);
    this.itemY = this.randomInRange(0, this.ContainerHeight * 0.9);
    this.itemRotation = this.randomInRange(0, 360);
    this.itemId = this.randomInRange(0, 6);
    this.boughtItems++;
  }

  private randomInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public get ContainerHeight(): number {
    return this.minigameContainer.nativeElement.offsetHeight;
  }
  public get ContainerWidth(): number {
    return this.minigameContainer.nativeElement.offsetWidth;
  }
}
