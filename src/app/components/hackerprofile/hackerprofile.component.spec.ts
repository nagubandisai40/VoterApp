import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerprofileComponent } from './hackerprofile.component';

describe('HackerprofileComponent', () => {
  let component: HackerprofileComponent;
  let fixture: ComponentFixture<HackerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
