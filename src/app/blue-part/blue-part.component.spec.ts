import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluePartComponent } from './blue-part.component';

describe('BluePartComponent', () => {
  let component: BluePartComponent;
  let fixture: ComponentFixture<BluePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluePartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
