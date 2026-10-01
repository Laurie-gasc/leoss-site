import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PointFort {
  icon: string; // chemin vers le PNG
  title: string;
  description: string;
}

@Component({
  selector: 'app-points-forts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './points-forts.component.html',
  styleUrl: './points-forts.component.scss'
})
export class PointsFortsComponent {
  points: PointFort[] = [
    { icon: 'images/icons/energie-renouvelable.webp', title: 'Énergie renouvelable', description: 'Une énergie propre et durable' },
    { icon: 'images/icons/panneaux-photovoltaiques.webp', title: 'Panneaux photovoltaïques', description: 'Produisez votre propre électricité' },
    { icon: 'images/icons/technologie-connectee.webp', title: 'Technologie connectée', description: 'Suivez votre production en temps réel' },
    { icon: 'images/icons/qualite-expertise.webp', title: 'Qualité & expertise', description: 'Des installations durables et performantes' },
    { icon: 'images/icons/accompagnement.webp', title: 'Accompagnement personnalisé', description: 'Un suivi à chaque étape de votre projet' }
  ];
}