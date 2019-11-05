import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ActorListComponent }    from './actor-list/actor-list.component';
import { ActorDetailComponent }  from './actor-detail/actor-detail.component';

import { ActorsRoutingModule } from './actors-routing.module';
import {Ng2SmartTableModule} from "ng2-smart-table";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    ActorsRoutingModule
  ],
  declarations: [
    ActorListComponent,
    ActorDetailComponent
  ]
})
export class ActorsModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
