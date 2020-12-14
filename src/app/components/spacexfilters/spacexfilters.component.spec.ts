import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexfiltersComponent } from './spacexfilters.component';

describe('SpacexfiltersComponent', () => {
  let component: SpacexfiltersComponent;
  let fixture: ComponentFixture<SpacexfiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexfiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
