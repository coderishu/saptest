import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexSuccessfullLaunchComponent } from './spacex-successfull-launch.component';

describe('SpacexSuccessfullLaunchComponent', () => {
  let component: SpacexSuccessfullLaunchComponent;
  let fixture: ComponentFixture<SpacexSuccessfullLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexSuccessfullLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexSuccessfullLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
