import { DOCUMENT } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, Input } from '@angular/core';
import { PodWAttr } from './pod-wattr';

@Component({
  selector: 'lib-podmind-widget',
  standalone: true,
  imports: [],
  template: `
   <voxgig-podmind-ask
   [attr.apikey]="podw.apikey"
   [attr.debug]="podw.debug">
   </voxgig-podmind-ask>
  `,
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PodWComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  @Input() podw!: PodWAttr

  ngOnInit() {
    const script = this.document.createElement('script')
    script.async = true
    script.src = 'https://podmind.voxgig.com/widget/voxgig-podmind-ask.js'
    return this.document.head.appendChild(script)
  }
}
