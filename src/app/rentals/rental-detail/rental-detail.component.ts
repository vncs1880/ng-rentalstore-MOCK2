import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { RentalService }  from '../rental.service';
import { Rental } from '../rental';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  rental$: Observable<Rental>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RentalService
  ) {}

  ngOnInit() {
    this.rental$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRental(params.get('id')))
    );
  }

  gotoRentals(rental: Rental) {
    let rentalId = rental ? rental.id : null;
    // Pass along the rental id if available
    // so that the RentalList component can select that rental.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/rentals', { id: rentalId, foo: 'foo' }]);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/