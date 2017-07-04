import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConlineContactComponent } from './conline-contact.component';

describe('ConlineContactComponent', () => {
  let component: ConlineContactComponent;
  let fixture: ComponentFixture<ConlineContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConlineContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConlineContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
