import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionTagComponent } from '../../shared/section-tag/section-tag.component';

interface Solution {
  image: string;
  title: string;
  description: string;
  points: string[];
  optionnel?: boolean;
}

@Component({
  selector: 'app-nos-solutions',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionTagComponent],
  templateUrl: './nos-solutions.component.html',
  styleUrl: './nos-solutions.component.scss'
})
export class NosSolutionsComponent {
  solutions: Solution[] = [
    {
      image: 'images/solutions/panneaux.jpg',
      title: 'Panneaux photovoltaïques',
      description: 'La base de votre installation : des panneaux solaires adaptés à votre toiture pour produire votre propre électricité.',
      points: [
        'Installation adaptée à votre habitation',
        'Matériel de qualité et certifié',
        'Grand Toulouse éligible aux aides financières'
      ]
    },
    {
      image: 'images/solutions/batterie-virtuelle.png',
      title: 'Batterie virtuelle',
      description: 'Stockez virtuellement votre surplus de production pour l\'utiliser quand vous en avez besoin, sans batterie physique à installer.',
      points: [
        'Optimisez l\'usage de votre production',
        'Pas d\'entretien ni d\'encombrement',
        'Solution flexible et évolutive'
      ]
    },
    {
      image: 'images/solutions/borne-recharge.png',
      title: 'Borne de recharge véhicule électrique',
      description: 'En option, complétez votre installation avec une borne de recharge pour votre véhicule électrique.',
      points: [
        'Rechargez votre véhicule avec votre propre énergie',
        'Installation par un électricien qualifié',
        'Compatible avec tout les véhicules électriques'
      ],
      optionnel: true
    },
{
  image: 'images/solutions/pompe-a-chaleur.jpg',
  title: 'Pompe à chaleur & production d\'eau chaude',
  description: 'Raccordez votre installation solaire à votre système de production d\'eau chaude pour optimiser votre autoconsommation, quel que soit votre équipement.',
  points: [
    'Compatible pompe à chaleur',
    'Compatible ballon thermodynamique',
    'Compatible ballon d\'eau chaude électrique'
  ]
}
  ];
}