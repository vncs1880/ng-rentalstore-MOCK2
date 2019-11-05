import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RentalListComponent }    from './rental-list/rental-list.component';
import { RentalDetailComponent }  from './rental-detail/rental-detail.component';

const rentalsRoutes: Routes = [
  { path: 'rentals', redirectTo: '/rentals' },
  { path: 'rental/:id', redirectTo: '/superrental/:id' },
  { path: 'rentals',  component: RentalListComponent, data: { animation: 'rentals' } },
  { path: 'superrental/:id', component: RentalDetailComponent, data: { animation: 'rental' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(rentalsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RentalsRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/