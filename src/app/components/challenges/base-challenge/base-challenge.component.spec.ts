import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseChallengeComponent } from './base-challenge.component';

describe('BaseChallengeComponent', () => {
  let component: BaseChallengeComponent;
  let fixture: ComponentFixture<BaseChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseChallengeComponent]
    });
    fixture = TestBed.createComponent(BaseChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
