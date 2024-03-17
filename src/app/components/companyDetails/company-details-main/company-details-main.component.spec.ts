import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsMainComponent } from './company-details-main.component';

describe('CompanyDetailsMainComponent', () => {
  let component: CompanyDetailsMainComponent;
  let fixture: ComponentFixture<CompanyDetailsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDetailsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
