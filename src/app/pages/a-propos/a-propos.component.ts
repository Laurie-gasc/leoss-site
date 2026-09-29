import { Component, OnInit } from '@angular/core';
import { SectionTagComponent } from '../../shared/section-tag/section-tag.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [SectionTagComponent],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.scss'
})
export class AProposComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Rémi Cattiau, électricien et installateur solaire certifié RGE QualiPV, basé à Saint-Marcel-Paulel. Découvrez l\'histoire de LEOSS.'
    });
  }
}