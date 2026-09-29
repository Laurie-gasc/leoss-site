import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';

interface Realisation {
  image: string;
  title: string;
}

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './realisations.component.html',
  styleUrl: './realisations.component.scss'
})
export class RealisationsComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Découvrez les installations photovoltaïques réalisées par LEOSS en Haute-Garonne, Tarn et Tarn-et-Garonne.'
    });
  }

  realisations: Realisation[] = [
    { image: 'images/realisations/Genovese.png', title: 'Installation panneaux'},
    { image: 'images/realisations/Faure.png', title: 'Installation panneaux'},
   // { image: 'images/realisations/projet-03.jpg', title: 'Installation panneaux'},
    //{ image: 'images/realisations/projet-04.jpg', title: 'Installation panneaux'},
   // { image: 'images/realisations/projet-05.jpg', title: 'Installation panneaux'},
   // { image: 'images/realisations/projet-06.jpg', title: 'Installation panneaux'}
  ];
}