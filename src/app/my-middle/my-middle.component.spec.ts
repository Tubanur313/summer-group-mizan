import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMiddleComponent } from './my-middle.component';

describe('MyMiddleComponent', () => {
  let component: MyMiddleComponent;
  let fixture: ComponentFixture<MyMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMiddleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
