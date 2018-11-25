import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursetroComponent } from './coursetro.component';

describe('CoursetroComponent', () => {
  let component: CoursetroComponent;
  let fixture: ComponentFixture<CoursetroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursetroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
