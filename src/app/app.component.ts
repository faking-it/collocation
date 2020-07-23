import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import {
  faBuilding,
  faBars,
  faCalendarAlt,
  faUsers,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import * as firebase from 'firebase';

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
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faUserPlus = faUserPlus;

  opened: boolean;

  isAuth: boolean;

  constructor(private authService: AuthService) {
    const config = {
      apiKey: 'AIzaSyCaA6fYkH_OpFRISqXbeegweBXL0ddcO5M',
      authDomain: 'collocation-c7e6a.firebaseapp.com',
      databaseURL: 'https://collocation-c7e6a.firebaseio.com',
      projectId: 'collocation-c7e6a',
      storageBucket: 'collocation-c7e6a.appspot.com',
      messagingSenderId: '232142179975',
      appId: '1:232142179975:web:30f6371e09e868f3f07222',
      measurementId: 'G-GY6N31727J',
    };
    firebase.initializeApp(config);
    firebase.analytics();
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }

  onSignOut() {
    this.authService.signOutUser();
  }
}
