import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferViewComponent } from './job-offer-view.component';

describe('JobOfferViewComponent', () => {
  let component: JobOfferViewComponent;
  let fixture: ComponentFixture<JobOfferViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobOfferViewComponent]
    });
    fixture = TestBed.createComponent(JobOfferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
