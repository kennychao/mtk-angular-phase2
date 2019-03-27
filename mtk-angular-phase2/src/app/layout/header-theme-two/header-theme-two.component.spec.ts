import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThemeTwoComponent } from './header-theme-two.component';

describe('HeaderThemeTwoComponent', () => {
  let component: HeaderThemeTwoComponent;
  let fixture: ComponentFixture<HeaderThemeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderThemeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderThemeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
