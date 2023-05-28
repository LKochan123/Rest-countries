import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  constructor(private renderer: Renderer2) { }

  title: string = "Where in the word?";
  isLightMode = true;

  onToggleTheme() {
    const body = document.body;
    this.isLightMode = false;
    body.classList.contains('dark') ? this.renderer.removeClass(body, 'dark') : this.renderer.addClass(body, 'dark');
  }
}
