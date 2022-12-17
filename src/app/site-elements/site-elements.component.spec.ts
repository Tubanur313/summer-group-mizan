import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteElementsComponent } from './site-elements.component';

describe('SiteElementsComponent', () => {
  let component: SiteElementsComponent;
  let fixture: ComponentFixture<SiteElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
