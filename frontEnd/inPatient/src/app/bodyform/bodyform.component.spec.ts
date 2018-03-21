import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyformComponent } from './bodyform.component';

describe('BodyformComponent', () => {
  let component: BodyformComponent;
  let fixture: ComponentFixture<BodyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
