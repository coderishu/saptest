import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexlaunchinfoComponent } from './spacexlaunchinfo.component';

describe('SpacexlaunchinfoComponent', () => {
  let component: SpacexlaunchinfoComponent;
  let fixture: ComponentFixture<SpacexlaunchinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexlaunchinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexlaunchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
