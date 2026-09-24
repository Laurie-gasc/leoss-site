import { Component } from '@angular/core';
import { SectionTagComponent } from '../../shared/section-tag/section-tag.component';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [SectionTagComponent],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.scss'
})
export class AProposComponent {}