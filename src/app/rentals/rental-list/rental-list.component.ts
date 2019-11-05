// TODO: Feature Componetized like TransactionCenter
import {Observable, of} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RentalService }  from '../rental.service';
import { Rental } from '../rental';
import {ActorService} from "../../actors/actor.service";
import {Actor} from "../../actors/actor";
import {async} from "rxjs/internal/scheduler/async";
import {ACTORS} from "../../actors/mock-actors";

// import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  rentals$: Observable<Rental[]>;
  selectedId: number;
  actors$: Observable<Actor[]>;

  constructor(
    private service: RentalService,
    private actorservice: ActorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.rentals$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getRentals();
      })
    );
    this.actors$ = this.route.paramMap.pipe(
      switchMap(params => {
          // (+) before `params.get()` turns the string into a number
          this.selectedId = +params.get('id');
          return this.actorservice.getActors();
      })
    );

    /*this.actorservice.getActors().subscribe((data: any) => {});
    this.settings = Object.assign({}, this.settings);*/
  }

    settings = {
        columns: {
            id: { title: 'Tansaction ID' },
            Client: {
                title: 'Client ID',
/*                editor: {
                    type: 'completer',
                    config: {
                        completer: {
                            data: of(ACTORS),//this.actors$,
                            searchFields: 'id',
                            titleField: 'id',
                            descriptionField: 'id',
                        },
                    },
                },*/
            },
            Vehicle: { title: 'Vehicle ID' },
            Type: {
                title: 'Type',
                editor: {
                    type: 'list',
                    config: {
                        list: [{ value: 'Rental', title: 'Rental' },
                                { value: 'Reservation', title: 'Reservation' },
                                { value: 'Return', title: 'Return',}],
                    },
                },
            },
            Timestamp: { title: 'Timestamp' },
            Start: { title: 'Start' },
            Due:{ title: 'Due' },
        }
    };
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
