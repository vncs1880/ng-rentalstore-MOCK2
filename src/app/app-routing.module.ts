import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent }  from './compose-message/compose-message.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

import { AuthGuard }                          from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import {VehicleListComponent} from "./vehicles/vehicle-list/vehicle-list.component";
import {RentalListComponent} from "./rentals/rental-list/rental-list.component";

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'transaction-center',
    loadChildren: () => import('./transaction-center/transaction-center.module').then(mod => mod.TransactionCenterModule),
    data: { preload: true }
  },
  {
    path: 'vehicles', component: VehicleListComponent
    //loadChildren: () => import('./vehicles/vehicles.module').then(mod => mod.VehiclesModule),
    // data: { preload: true }
  },
  {path:'rentals', component:RentalListComponent},

  { path: '',   redirectTo: '/actors', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
