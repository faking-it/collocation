import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Flat } from '../models/flat.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class FlatService {
  flats: Flat[] = [];
  flatsSubject = new Subject<Flat[]>();

  emitFlats() {
    this.flatsSubject.next(this.flats);
  }

  saveFlats() {
    firebase.database().ref('/flats').set(this.flats);
  }

  getFlats() {
    firebase
      .database()
      .ref('flats/')
      .on('value', (data: DataSnapshot) => {
        this.flats = data.val() ? data.val() : [];
        this.emitFlats();
      });
    console.log(this.flats);
  }

  constructor() {
    this.getFlats();
  }

  createNewFlat(newFlat: Flat) {
    this.flats.push(newFlat);
    this.saveFlats();
    this.emitFlats();
  }

  removeFlat(flat: Flat) {
    const flatIndexToRemove = this.flats.findIndex((flatEl) => {
      if (flatEl === flat) {
        return true;
      }
    });
    this.flats.splice(flatIndexToRemove, 1);
    this.saveFlats();
    this.emitFlats();
  }
}
