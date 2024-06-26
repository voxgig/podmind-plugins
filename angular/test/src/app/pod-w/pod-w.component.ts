import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { PodWAttr } from '../pod-w-attr';

@Component({
  selector: 'app-pod-w',
  standalone: true,
  imports: [],
  templateUrl: './pod-w.component.html',
  styleUrl: './pod-w.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PodWComponent {
  @Input() podw!: PodWAttr
}
