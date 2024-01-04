import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesComponent } from './cakes.component';

describe('CakesComponent', () => {
  let component: CakesComponent;
  let fixture: ComponentFixture<CakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakesComponent]
    });
    fixture = TestBed.createComponent(CakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
