import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTagComponent } from '../../shared/section-tag/section-tag.component';
import { Meta } from '@angular/platform-browser';

interface Avis {
  nom: string;
  note: number; // de 1 à 5
  commentaire: string;
}

@Component({
  selector: 'app-avis-clients',
  standalone: true,
  imports: [CommonModule, SectionTagComponent],
  templateUrl: './avis-clients.component.html',
  styleUrl: './avis-clients.component.scss',
})
export class AvisClientsComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Avis et témoignages clients sur les installations solaires LEOSS en Haute-Garonne, Tarn et Tarn-et-Garonne.',
    });
  }

  avis: Avis[] = [
    {
      nom: 'Pascale Freigneaux',
      note: 5,
      commentaire:
        "Nous sommes très contents de la prestation faite par LEOSS Solutions énergétiques. Le travail est sérieux et de qualité, les personnes sont disponibles, prennent le temps d'échanger et de faire toutes les vérifications nécessaires sur l'installation. Pour ne rien gâcher, ils sont sympas. Faites appel à cette entreprise en toute confiance !",
    },
    {
      nom: 'Tim',
      note: 5,
      commentaire:
        "Une équipe sérieuse, professionnelle et à l'écoute ! De très bons conseils, des explications claires et un accompagnement de qualité tout au long du projet. On ressent un véritable savoir-faire et une volonté de satisfaire le client. Je recommande vivement Léoss Solutions Énergétiques pour vos projets photovoltaïques !",
    },
  ];

  etoiles = [1, 2, 3, 4, 5];
  indexActif = 0;

  precedent(): void {
    this.indexActif =
      this.indexActif === 0 ? this.avis.length - 1 : this.indexActif - 1;
  }

  suivant(): void {
    this.indexActif =
      this.indexActif === this.avis.length - 1 ? 0 : this.indexActif + 1;
  }
}