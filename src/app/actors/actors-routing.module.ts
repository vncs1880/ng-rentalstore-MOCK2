import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActorListComponent }    from './actor-list/actor-list.component';
import { ActorDetailComponent }  from './actor-detail/actor-detail.component';

const actorsRoutes: Routes = [
  { path: 'actors', redirectTo: '/actors' },
  { path: 'actor/:id', redirectTo: '/superactor/:id' },
  { path: 'actors',  component: ActorListComponent, data: { animation: 'actors' } },
  { path: 'superactor/:id', component: ActorDetailComponent, data: { animation: 'actor' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(actorsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ActorsRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/