import { DOCUMENT } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, Input, Renderer2 } from '@angular/core';
import { PodWAttr } from './pod-wattr';

@Component({
  selector: 'lib-podw-angular',
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

export class PodwAngularComponent {
  constructor(
    private render2: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  @Input() podw!: PodWAttr

  ngOnInit() {
    const script = this.render2.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://podmind.voxgig.com/widget/voxgig-podmind-ask.js'
    script.async = true
    this.render2.appendChild(this.document.body, script)
  }
}
