import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionTagComponent } from '../../../../shared/section-tag/section-tag.component';

interface SolutionCard {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-nos-solutions-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionTagComponent],
  templateUrl: './nos-solutions-preview.component.html',
  styleUrl: './nos-solutions-preview.component.scss'
})
export class NosSolutionsPreviewComponent {
  solutions: SolutionCard[] = [
    { image: 'images/solutions/panneaux.jpg', title: 'Panneaux photovoltaïques', description: 'Produisez votre propre électricité' },
    { image: 'images/solutions/batterie-virtuelle.png', title: 'Batterie virtuelle', description: 'Optimisez votre autoconsommation' },
    { image: 'images/solutions/borne-recharge.png', title: 'Borne de recharge', description: 'Rechargez votre véhicule électrique' },
   { image: 'images/solutions/pompe-a-chaleur.jpg', title: 'Pompe à chaleur & eau chaude', description: 'Optimisez votre production d\'eau chaude sanitaire' }
  ];
}