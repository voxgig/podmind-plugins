import { Component } from '@angular/core';
import { PodWAttr } from './pod-wattr';
import { PodWComponent } from '@voxgig/podw-angular'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PodWComponent],
  template: `
    <main class="main">
      <h1>{{ title }}</h1>

      <lib-podw[podw]="podWAttr"></lib-podw>
    </main>
  `,
  styles: `
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `
})


export class AppComponent {
  title = 'Podmind Test';

  podWAttr: PodWAttr = {
    "apikey": "your-api-key",
    "debug": "true",
  };
}
