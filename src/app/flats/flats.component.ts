import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { FlatService } from '../services/flat.service';
import { Flat } from '../models/flat.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export interface Flats {
  url: string;
  position: number;
}

const ELEMENT_DATA: Flats[] = [];

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css'],
})
export class FlatsComponent implements OnInit, OnDestroy {
  faPlusCircle = faPlusCircle;

  new_url: string = '';

  displayedColumns: string[] = ['position', 'url'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable) table: MatTable<any>;

  addRow(): void {
    ELEMENT_DATA.push({ position: ELEMENT_DATA.length + 1, url: this.new_url });
    this.table.renderRows();
    this.new_url = '';
  }

  flats: Flat[];
  flatsSubscription: Subscription;

  constructor(private flatsService: FlatService, private router: Router) {}

  ngOnInit() {
    this.flatsSubscription = this.flatsService.flatsSubject.subscribe(
      (flats: Flat[]) => {
        this.flats = flats;
      }
    );
    this.flatsService.emitFlats();
  }

  onNewFlat() {
    this.router.navigate(['/flats', 'new']);
  }

  onDeleteFlat(flat: Flat) {
    this.flatsService.removeFlat(flat);
  }

  onViewFlat(id: number) {
    this.router.navigate(['/flats', 'view', id]);
  }

  ngOnDestroy() {
    this.flatsSubscription.unsubscribe();
  }
}
