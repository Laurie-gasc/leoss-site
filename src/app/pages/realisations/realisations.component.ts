import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Realisation {
  image: string;
  title: string;
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
  realisations: Realisation[] = [
    { image: 'images/realisations/projet-01.jpg', title: 'Installation panneaux', location: 'À compléter' },
    { image: 'images/realisations/projet-02.jpg', title: 'Installation panneaux', location: 'À compléter' },
    { image: 'images/realisations/projet-03.jpg', title: 'Installation panneaux', location: 'À compléter' },
    { image: 'images/realisations/projet-04.jpg', title: 'Installation panneaux', location: 'À compléter' },
    { image: 'images/realisations/projet-05.jpg', title: 'Installation panneaux', location: 'À compléter' },
    { image: 'images/realisations/projet-06.jpg', title: 'Installation panneaux', location: 'À compléter' }
  ];
}