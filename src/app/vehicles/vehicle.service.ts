import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  constructor(private messageService: MessageService) { }

  getVehicles(): Observable<Vehicle[]> {
    // TODO: send the message _after_ fetching the vehicles
    this.messageService.add('VehicleService: fetched vehicles');
    return of(VEHICLES);
  }

  getVehicle(id: number | string) {
    return this.getVehicles().pipe(
      // (+) before `id` turns the string into a number
      map((vehicles: Vehicle[]) => vehicles.find(vehicle => vehicle.id === +id))
    );
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/