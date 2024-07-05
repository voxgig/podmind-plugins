import { DOCUMENT } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, Input } from '@angular/core';
import { PodWAttr } from './pod-wattr';

@Component({
  selector: 'lib-podw',
  standalone: true,
  imports: [],
  template: `
   <voxgig-podmind-ask
   [attr.apikey]="podWAttr.apikey"
   [attr.debug]="podWAttr.debug">
   </voxgig-podmind-ask>
  `,
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PodWComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  @Input() podWAttr!: PodWAttr

  ngOnInit() {
    const script = this.document.createElement('script')
    script.src = 'https://podmind.voxgig.com/widget/voxgig-podmind-ask.js'
    script.async = true
    this.document.head.appendChild(script)
  }
}
