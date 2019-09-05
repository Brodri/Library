import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaSimpleComponent } from './textarea-simple.component';

describe('TextareaSimpleComponent', () => {
  let component: TextareaSimpleComponent;
  let fixture: ComponentFixture<TextareaSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
