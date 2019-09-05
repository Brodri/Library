import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrimaryComponent } from './table-primary.component';

describe('TableComponent', () => {
  let component: TablePrimaryComponent;
  let fixture: ComponentFixture<TablePrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
