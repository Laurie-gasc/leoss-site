import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SolutionCard {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-nos-solutions-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nos-solutions-preview.component.html',
  styleUrl: './nos-solutions-preview.component.scss'
})
export class NosSolutionsPreviewComponent {
  solutions: SolutionCard[] = [
    { image: 'images/solutions/particuliers.jpg', title: 'Particuliers', description: 'Faites des économies dès aujourd\'hui' },
    { image: 'images/solutions/professionnels.jpg', title: 'Professionnels', description: 'Valorisez votre bâtiment et votre activité' },
    { image: 'images/solutions/collectivites.jpg', title: 'Collectivités', description: 'Agissez pour un territoire plus durable' },
    { image: 'images/solutions/maintenance.jpg', title: 'Maintenance', description: 'Des installations toujours performantes' }
  ];
}