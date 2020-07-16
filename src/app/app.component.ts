import { Component } from '@angular/core';
import { faBuilding, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Collocation';
  faBuilding = faBuilding;
  faBars = faBars;

  opened: boolean;
}
