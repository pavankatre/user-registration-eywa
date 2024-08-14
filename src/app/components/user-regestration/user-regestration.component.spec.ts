import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegestrationComponent } from './user-regestration.component';

describe('UserRegestrationComponent', () => {
  let component: UserRegestrationComponent;
  let fixture: ComponentFixture<UserRegestrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegestrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRegestrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
