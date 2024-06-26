import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PodWAttr } from './pod-w-attr';
import { PodwAngularComponent } from '@voxgig/podw-angular'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PodwAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppComponent {
  title = 'Podmind Test';

  podw: PodWAttr = {
    "apikey": "your-api-key",
    "debug": "true",
  };
}
