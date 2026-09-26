import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mentions-legales-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentions-legales-modal.component.html',
  styleUrl: './mentions-legales-modal.component.scss'
})
export class MentionsLegalesModalComponent {
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}