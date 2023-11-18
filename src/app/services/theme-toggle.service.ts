import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  // Metodo per attivare o disattivare il tema dark automaticamente in base al client
  toggleDarkThemePreference() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const htmlElement = document.querySelector('html');

    if (prefersDarkScheme.matches) {
      htmlElement?.setAttribute('data-bs-theme', 'dark');
    } else {
      htmlElement?.removeAttribute('data-bs-theme');
    }
  }

  // Metodo per attivare o disattivare il tema dark
  toggleTheme() {
    const htmlElement = document.querySelector('html');
    const currentTheme = htmlElement?.getAttribute('data-bs-theme');

    if (currentTheme === 'dark') {
      htmlElement?.removeAttribute('data-bs-theme');
    } else {
      htmlElement?.setAttribute('data-bs-theme', 'dark');
    }
  }

}
