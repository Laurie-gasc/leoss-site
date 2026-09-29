import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HeroComponent } from './sections/hero/hero.component';
import { PointsFortsComponent } from './sections/points-forts/points-forts.component';
import { NosSolutionsPreviewComponent } from './sections/nos-solutions-preview/nos-solutions-preview.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeroComponent, PointsFortsComponent, NosSolutionsPreviewComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'LEOSS, installateur de panneaux photovoltaïques en Haute-Garonne (31), Tarn (81) et Tarn-et-Garonne (82). Certifiés RGE QualiPV.'
    });
  }
}