import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCareComponent } from './daily-care.component';

describe('DailyCareComponent', () => {
  let component: DailyCareComponent;
  let fixture: ComponentFixture<DailyCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
