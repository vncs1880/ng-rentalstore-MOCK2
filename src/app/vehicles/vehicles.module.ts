import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { VehicleListComponent }    from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent }  from './vehicle-detail/vehicle-detail.component';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import {Ng2SmartTableModule} from "ng2-smart-table";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    VehiclesRoutingModule
  ],
  declarations: [
    VehicleListComponent,
    VehicleDetailComponent
  ]
})
export class VehiclesModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
