import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Rental } from './rental';
import { RENTALS } from './mock-rentals';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class RentalService {

  constructor(private messageService: MessageService) { }

  getRentals(): Observable<Rental[]> {
    // TODO: send the message _after_ fetching the rentals
    this.messageService.add('RentalService: fetched rentals');
    return of(RENTALS);
  }

  getRental(id: number | string) {
    return this.getRentals().pipe(
      // (+) before `id` turns the string into a number
      map((rentals: Rental[]) => rentals.find(rental => rental.id === +id))
    );
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/