import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeGroupComponent } from './challenge-group.component';

describe('ChallengeGroupComponent', () => {
  let component: ChallengeGroupComponent;
  let fixture: ComponentFixture<ChallengeGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeGroupComponent]
    });
    fixture = TestBed.createComponent(ChallengeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
