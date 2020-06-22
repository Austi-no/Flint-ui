import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlintpageComponent } from './flintpage.component';

describe('FlintpageComponent', () => {
  let component: FlintpageComponent;
  let fixture: ComponentFixture<FlintpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlintpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlintpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
