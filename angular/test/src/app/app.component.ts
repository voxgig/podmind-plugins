import { Component } from '@angular/core';
import { PodWAttr } from './pod-wattr';
import { PodwAngularComponent } from '@voxgig/podw-angular'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PodwAngularComponent],
  template: `
    <main class="main">
      <h1>{{ title }}</h1>

      <lib-podw-angular [podw]="podw"></lib-podw-angular>
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

  podw: PodWAttr = {
    "apikey": "your-api-key",
    "debug": "true",
  };
}
