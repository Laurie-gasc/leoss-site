import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { PointsFortsComponent } from './sections/points-forts/points-forts.component';
import { NosSolutionsComponent } from '../nos-solutions/nos-solutions.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NosSolutionsPreviewComponent } from './sections/nos-solutions-preview/nos-solutions-preview.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeroComponent, PointsFortsComponent,NosSolutionsPreviewComponent],  
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {}