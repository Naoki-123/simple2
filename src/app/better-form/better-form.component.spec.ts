import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterFormComponent } from './better-form.component';

describe('BetterFormComponent', () => {
  let component: BetterFormComponent;
  let fixture: ComponentFixture<BetterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
