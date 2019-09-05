import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySimpleComponent } from './body-simple.component';

describe('BodySimpleComponent', () => {
  let component: BodySimpleComponent;
  let fixture: ComponentFixture<BodySimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
