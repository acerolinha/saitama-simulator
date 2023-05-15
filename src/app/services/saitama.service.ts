import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaitamaService {
  private money: number = 0;
  private stage: number = 0;

  public get Money(): number {
    return this.money;
  }

  public earn(amount: number): void {
    this.money += amount;
  }

  public spend(amount: number): void {
    this.money -= amount;
    this.stage++;
  }

  public get Stage(): number {
    return this.stage;
  }

  public completeChallenge(): void {
    this.stage++;
  }

  constructor() {}
}
