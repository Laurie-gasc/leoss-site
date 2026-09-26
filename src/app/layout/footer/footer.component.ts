import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MentionsLegalesModalComponent } from '../../shared/mentions-legales-modal/mentions-legales-modal.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, MentionsLegalesModalComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  showMentionsLegales = false;

  openMentionsLegales(event: Event): void {
    event.preventDefault();
    this.showMentionsLegales = true;
  }

  closeMentionsLegales(): void {
    this.showMentionsLegales = false;
  }
}