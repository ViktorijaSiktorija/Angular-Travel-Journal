import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { travelData } from './locations';
import { HeaderComponent } from './components/header/header.component';
import { TravelCardComponent } from './components/travel-card/travel-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TravelCardComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  entries = travelData;
}
