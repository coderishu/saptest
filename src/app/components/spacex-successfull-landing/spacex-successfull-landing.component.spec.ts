import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexSuccessfullLandingComponent } from './spacex-successfull-landing.component';

describe('SpacexSuccessfullLandingComponent', () => {
  let component: SpacexSuccessfullLandingComponent;
  let fixture: ComponentFixture<SpacexSuccessfullLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexSuccessfullLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexSuccessfullLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
