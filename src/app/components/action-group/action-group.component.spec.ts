import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGroupComponent } from './action-group.component';

describe('ActionGroupComponent', () => {
  let component: ActionGroupComponent;
  let fixture: ComponentFixture<ActionGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionGroupComponent]
    });
    fixture = TestBed.createComponent(ActionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
