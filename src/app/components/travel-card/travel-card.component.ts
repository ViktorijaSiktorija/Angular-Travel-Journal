import { Component, Input } from '@angular/core';
import { TravelEntry } from '../../models/travel-entry';

@Component({
  selector: 'app-travel-card',
  imports: [],
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.css'],
})
export class TravelCardComponent {
  @Input() travel!: TravelEntry;
}
