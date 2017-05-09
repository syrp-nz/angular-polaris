# angular-polaris

This package aimed to port functionality from the Shopify Polaris design system from React to Angular. It tries to follow the same convention as the original Shopify Polaris package as much as possible.

NB: The Angular Polaris component are prefix with `plrs`. e.g.
```html
<plrsLayout>
    <plrsSection>
        <plrsCard title="Syrp App Configuration" sectioned [actions]="[{'content': 'Manage Configuration', 'url': '/config', 'routerLinkActive': true}]">
            <p>Manage configuration.</p>
        </plrsCard>
    </plrsSection>
</plrsLayout>
```

## Under Development - Use at your own risk

The package is under active development, so beware. Polaris components are converted as needed.

| Component     	| Implementation state 	| Extra details 	|
|---------------	|----------------------	|---------------	|
| Badge           	| Beta                 	|               	|
| Banner        	| Beta                 	|               	|
| Button        	| Beta                 	|               	|
| Card          	| Beta                 	|               	|
| Icon          	| Beta                 	|               	|
| Label         	| Dev                 	|               	|
| Labelled         	| Dev                 	|               	|
| Layout        	| Beta                 	|               	|
| Resource List 	| Dev                  	|               	|
| Select         	| Dev                 	|               	|
| Stack         	| Beta                 	|               	|
| Textfield        	| Dev                 	|               	|
| Thumbnail        	| Dev                 	|               	|
| Visually Hidden  	| Beta                 	|               	|

## Installation

To install this library, run:

```bash
$ npm install angular-polaris --save
```

## Consuming the library
To use AngularPolaris in your Angular project, import `AngularPolarisModule` in your `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { AngularPolarisModule } from 'angular-polaris';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularPolarisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

The package doesn't ship with Polaris css, so you need to manually include it in your project from the Shopify CDN. e.g.:
```html
<link href="https://sdks.shopifycdn.com/polaris/1.0.2/polaris.min.css" rel="stylesheet">
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Maxime Rainville](mailto:maxime@syrp.co.nz)
