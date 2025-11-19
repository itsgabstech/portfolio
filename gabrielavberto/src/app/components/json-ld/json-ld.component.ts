import { Component } from '@angular/core';

@Component({
  selector: 'app-json-ld',
  templateUrl: './json-ld.component.html',
})
export class JsonLdComponent {
  // Minimal Json-LD component — keeps SSR/SEO code centralized.
  jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gabriela Berto',
    url: 'https://itsgabstech.github.io/',
  };
}
