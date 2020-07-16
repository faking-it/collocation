import { Component } from '@angular/core';
import {
  faBuilding,
  faBars,
  faCalendarAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Collocation';
  faBuilding = faBuilding;
  faBars = faBars;
  faCalendarAlt = faCalendarAlt;
  faUsers = faUsers;

  opened: boolean;
}
