import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTagComponent } from '../../shared/section-tag/section-tag.component';
import { Meta } from '@angular/platform-browser';

interface Avis {
  nom: string;
  commentaire: string;
}

@Component({
  selector: 'app-avis-clients',
  standalone: true,
  imports: [CommonModule, SectionTagComponent],
  templateUrl: './avis-clients.component.html',
  styleUrl: './avis-clients.component.scss'
})
export class AvisClientsComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Avis et témoignages clients sur les installations solaires LEOSS en Haute-Garonne, Tarn et Tarn-et-Garonne.'
    });
  }

  avis: Avis[] = [
    //{ nom: 'À compléter', commentaire: 'Une équipe à l\'écoute, des conseils clairs et une installation parfaite. Nous sommes ravis de notre choix et de notre production !' },
    //{ nom: 'À compléter', commentaire: 'À compléter avec un vrai avis client.' },
    //{ nom: 'À compléter', commentaire: 'À compléter avec un vrai avis client.' }
  ];

  indexActif = 0;

  precedent(): void {
    this.indexActif = this.indexActif === 0 ? this.avis.length - 1 : this.indexActif - 1;
  }

  suivant(): void {
    this.indexActif = this.indexActif === this.avis.length - 1 ? 0 : this.indexActif + 1;
  }
}