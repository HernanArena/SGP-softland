import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumpsComponent } from './breadcumps.component';

describe('BreadcumpsComponent', () => {
  let component: BreadcumpsComponent;
  let fixture: ComponentFixture<BreadcumpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcumpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
