import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainThemeTwoComponent } from './main-theme-two.component';

describe('MainThemeTwoComponent', () => {
  let component: MainThemeTwoComponent;
  let fixture: ComponentFixture<MainThemeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainThemeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainThemeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
