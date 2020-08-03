import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlintlistComponent } from './flintlist.component';

describe('FlintlistComponent', () => {
  let component: FlintlistComponent;
  let fixture: ComponentFixture<FlintlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlintlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlintlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
