import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7fireComponent } from './ng7fire.component';

describe('Ng7fireComponent', () => {
  let component: Ng7fireComponent;
  let fixture: ComponentFixture<Ng7fireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7fireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7fireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
