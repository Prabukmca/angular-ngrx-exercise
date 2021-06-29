import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContainersComponent } from './book-containers.component';

describe('BookContainersComponent', () => {
  let component: BookContainersComponent;
  let fixture: ComponentFixture<BookContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookContainersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
