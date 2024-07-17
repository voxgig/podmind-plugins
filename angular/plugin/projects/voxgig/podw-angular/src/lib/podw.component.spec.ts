import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { PodWComponent } from './podw.component';
import { PodWAttr } from './pod-wattr';

describe('PodWComponent', () => {
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    })
      .compileComponents();

    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostFixture.detectChanges();
  });

  it('should have the apikey and debug attributes', () => {
    const element = testHostFixture
      .nativeElement
      .querySelector('voxgig-podmind-ask')

    expect(testHostFixture).toBeTruthy();
    expect(element.hasAttribute('apikey')).toBeTruthy();
    expect(element.getAttribute('apikey')).toEqual('test');
    expect(element.hasAttribute('debug')).toBeTruthy();
  });

  @Component({
    selector: `host-component`,
    standalone: true,
    template: `<lib-podmind-widget [podw]="podWAttr" />`,
    imports: [PodWComponent]
  })
  class TestHostComponent {
    podWAttr: PodWAttr = {
      "apikey": "test",
      "debug": "true"
    }
  }
});
