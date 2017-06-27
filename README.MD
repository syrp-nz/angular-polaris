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
| Breadcrumbs      	| Dev                 	|               	|
| Button        	| Beta                 	|               	|
| Card          	| Beta                 	|               	|
| Icon          	| Dev                 	|               	|
| Label         	| Dev                 	|               	|
| Labelled         	| Dev                 	|               	|
| Layout        	| Beta                 	|               	|
| Page          	| Dev                 	|               	|
| Pagination       	| Dev                 	|               	|
| Resource List 	| Dev                  	|               	|
| Select         	| Dev                 	|               	|
| Stack         	| Beta                 	|               	|
| Textfield        	| Dev                 	|               	|
| Thumbnail        	| Dev                 	|               	|
| UnstyledLink     	| Dev                 	|               	|
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
$ npm run publish
```

## Wysiwyg Component

The library comes with a `plrsWysiwyg` component that is not natively included in the Shopify Polaris React library. This component is built on top
of (QuillJs)[https://quilljs.com]. If you want to use the WYSIWYG component, you need to add a reference to `"../node_modules/quill/dist/quill.js"`
under `scripts` in your `.angular-cli.json` file and to load the Quill Snow Theme css in your `index.html` file with:
```html
<link href="https://cdn.quilljs.com/1.2.2/quill.snow.css" rel="stylesheet">
```

The Angular implementation was done by adapting code from (NGX-Quill)[https://github.com/KillerCodeMonkey/ngx-quill].

## License

MIT © [Maxime Rainville](mailto:maxime@syrp.co.nz)
