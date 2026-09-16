import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Realisation {
  image: string;
  title: string;
  category: 'particuliers' | 'professionnels' | 'collectivites';
  location: string;
}

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './realisations.component.html',
  styleUrl: './realisations.component.scss'
})
export class RealisationsComponent {
  filtreActif: string = 'tous';

  realisations: Realisation[] = [
    { image: 'images/realisations/projet-01.jpg', title: 'Installation toiture', category: 'particuliers', location: 'À compléter' },
    { image: 'images/realisations/projet-02.jpg', title: 'Installation toiture', category: 'particuliers', location: 'À compléter' },
    { image: 'images/realisations/projet-03.jpg', title: 'Installation bâtiment', category: 'professionnels', location: 'À compléter' },
    { image: 'images/realisations/projet-04.jpg', title: 'Installation toiture', category: 'particuliers', location: 'À compléter' },
    { image: 'images/realisations/projet-05.jpg', title: 'Installation bâtiment', category: 'professionnels', location: 'À compléter' },
    { image: 'images/realisations/projet-06.jpg', title: 'Installation toiture', category: 'particuliers', location: 'À compléter' }
  ];

  get realisationsFiltrees(): Realisation[] {
    if (this.filtreActif === 'tous') return this.realisations;
    return this.realisations.filter(r => r.category === this.filtreActif);
  }

  setFiltre(filtre: string): void {
    this.filtreActif = filtre;
  }
}