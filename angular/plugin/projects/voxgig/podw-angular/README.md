# Angular Podmind Widget

## Install 

- In your app root directory, run:

```bash
npm i @voxgig/podw-angular
```

- After the package is installed, import and add the lib component similar to the following:

```typescript
import { Component } from '@angular/core';
import { PodWComponent } from '@voxgig/podw-angular'
import { PodWAttr } from './pod-wattr'

@Component({
  imports: [PodWComponent]
})

export class YourComponent {
  podWAttr: PodWAttr = {
    "apikey": "your-api-key"
  };
}
```
- You must pass the following prop through an interface:
    - `apikey` - The API key provided by Voxgig.

- Then add to your template file:

```html
<lib-podmind-widget [podw]="podWAttr" />
```

## Debugging

- You can pass the attribute `debug` to the `podWAttr` property. To log widget properties:

```typescript
podWAttr: PodWAttr = {
"apikey": "your-api-key",
"debug": "true"
};
```

- Resulting in a log similar to the following:

```bash
apikey: "your-api-key"
debug: true
mark: "20e1a7d5"
```
