import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTabMainComponent } from './my-tab-main.component';

describe('MyTabMainComponent', () => {
  let component: MyTabMainComponent;
  let fixture: ComponentFixture<MyTabMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTabMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTabMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
