import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedPageComponent } from './booked-page.component';

describe('BookedPageComponent', () => {
  let component: BookedPageComponent;
  let fixture: ComponentFixture<BookedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
