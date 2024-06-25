import { CUSTOM_ELEMENTS_SCHEMA, Component, Renderer2, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})


export class AppComponent {
  constructor(
    private render2: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  title = 'test';

  ngOnInit() {
    const script = this.render2.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://podmind.voxgig.com/widget/voxgig-podmind-ask.js'
    this.render2.appendChild(this.document.body, script)
  }
}
