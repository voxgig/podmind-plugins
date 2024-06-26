import { Component, Renderer2, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common'
import { PodWComponent } from './pod-w/pod-w.component'
import { PodWAttr } from './pod-w-attr';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PodWComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppComponent {
  constructor(
    private render2: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  title = 'Podmind Test';

  podw: PodWAttr = {
    "apikey": "your-api-key",
    "debug": "true",
  };

  ngOnInit() {
    const script = this.render2.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://podmind.voxgig.com/widget/voxgig-podmind-ask.js'
    this.render2.appendChild(this.document.body, script)
  }
}
