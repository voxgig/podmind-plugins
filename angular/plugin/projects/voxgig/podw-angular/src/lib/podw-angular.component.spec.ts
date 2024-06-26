import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodwAngularComponent } from './podw-angular.component';

describe('PodwAngularComponent', () => {
  let component: PodwAngularComponent;
  let fixture: ComponentFixture<PodwAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodwAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodwAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
