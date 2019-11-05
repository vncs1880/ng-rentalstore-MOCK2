import {NgModule, OnInit} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { RentalListComponent }    from './rental-list/rental-list.component';
import { RentalDetailComponent }  from './rental-detail/rental-detail.component';

import { RentalsRoutingModule } from './rentals-routing.module';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {switchMap} from "rxjs/operators";
import {Actor} from "../actors/actor";
import {Observable} from "rxjs";
import {RentalService} from "./rental.service";
import {ActorService} from "../actors/actor.service";
import {ActivatedRoute} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    RentalsRoutingModule
  ],
  declarations: [
    RentalListComponent,
    RentalDetailComponent
  ]
})
export class RentalsModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
