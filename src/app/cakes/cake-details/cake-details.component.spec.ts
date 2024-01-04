import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDetailsComponent } from './cake-details.component';

describe('CakeDetailsComponent', () => {
  let component: CakeDetailsComponent;
  let fixture: ComponentFixture<CakeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeDetailsComponent]
    });
    fixture = TestBed.createComponent(CakeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
