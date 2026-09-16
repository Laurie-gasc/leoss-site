import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  imports: [CommonModule, RouterLink],
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
        'Éligible aux aides financières'
      ]
    },
    {
      image: 'images/solutions/batterie-virtuelle.jpg',
      title: 'Batterie virtuelle',
      description: 'Stockez virtuellement votre surplus de production pour l\'utiliser quand vous en avez besoin, sans batterie physique à installer.',
      points: [
        'Optimisez l\'usage de votre production',
        'Pas d\'entretien ni d\'encombrement',
        'Solution flexible et évolutive'
      ]
    },
    {
      image: 'images/solutions/borne-recharge.jpg',
      title: 'Borne de recharge véhicule électrique',
      description: 'En option, complétez votre installation avec une borne de recharge pour votre véhicule électrique.',
      points: [
        'Rechargez votre véhicule avec votre propre énergie',
        'Installation par un électricien qualifié',
        'Compatible avec la plupart des véhicules électriques'
      ],
      optionnel: true
    },
    {
      image: 'images/solutions/pompe-a-chaleur.jpg',
      title: 'Raccordement pompe à chaleur',
      description: 'Couplez votre installation solaire à votre pompe à chaleur pour optimiser votre autoconsommation.',
      points: [
        'Valorisez au mieux votre production solaire',
        'Réduisez votre facture de chauffage',
        'Une expertise électricité + solaire réunie'
      ]
    }
  ];
}