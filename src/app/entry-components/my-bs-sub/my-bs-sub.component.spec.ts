import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBsSubComponent } from './my-bs-sub.component';

describe('MyBsSubComponent', () => {
  let component: MyBsSubComponent;
  let fixture: ComponentFixture<MyBsSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBsSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBsSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
