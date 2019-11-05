import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehicleListComponent }    from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent }  from './vehicle-detail/vehicle-detail.component';

const vehiclesRoutes: Routes = [
  { path: 'vehicles', redirectTo: '/vehicles' },
  { path: 'vehicle/:id', redirectTo: '/supervehicle/:id' },
  { path: 'vehicles',  component: VehicleListComponent, data: { animation: 'vehicles' } },
  { path: 'supervehicle/:id', component: VehicleDetailComponent, data: { animation: 'vehicle' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(vehiclesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VehiclesRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/