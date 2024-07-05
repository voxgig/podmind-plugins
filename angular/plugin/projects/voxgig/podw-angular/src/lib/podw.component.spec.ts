import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodWComponent } from './podw.component';

describe('PodwAngularComponent', () => {
  let component: PodWComponent;
  let fixture: ComponentFixture<PodWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodWComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PodWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
