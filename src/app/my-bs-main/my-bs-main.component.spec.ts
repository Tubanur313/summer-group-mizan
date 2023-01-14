import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBsMainComponent } from './my-bs-main.component';

describe('MyBsMainComponent', () => {
  let component: MyBsMainComponent;
  let fixture: ComponentFixture<MyBsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
