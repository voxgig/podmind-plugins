import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PodWComponent } from '@voxgig/podw-angular'
import { PodWAttr } from './pod-wattr'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PodWComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';

  podWAttr: PodWAttr = {
    "apikey": "your-api-key",
    "debug": "true",
  };
}
