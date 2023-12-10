import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [``],
})
export class HeaderComponent {
  // Method to avoid page refresh in Contact link to footer
  scrollToFooter(event: Event) {
    event.preventDefault();

    // Scroll to the footer
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
