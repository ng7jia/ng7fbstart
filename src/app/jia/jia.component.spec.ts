import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiaComponent } from './jia.component';

describe('JiaComponent', () => {
  let component: JiaComponent;
  let fixture: ComponentFixture<JiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
