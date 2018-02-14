import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListDetailComponent } from './nav-list-detail.component';

describe('NavListDetailComponent', () => {
  let component: NavListDetailComponent;
  let fixture: ComponentFixture<NavListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
