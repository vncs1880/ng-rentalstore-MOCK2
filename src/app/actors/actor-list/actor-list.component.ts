// TODO: Feature Componetized like TransactionCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActorService }  from '../actor.service';
import { Actor } from '../actor';

// import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors$: Observable<Actor[]>;
  selectedId: number;

  constructor(
    private service: ActorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actors$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getActors();
      })
    );
  }

    settings = {
        columns: {
            id: { title: 'Licence ID' },
            username: { title: 'User Name' },
            firstname: { title: 'First Name' },
            lastname: { title: 'Last Name' },
            usertype: { title: 'Type' },
            password: { title: 'Password' },
            phone: { title: 'Phone' },
            licenseExpDt: { title: 'Exp date' }
        }
    };
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
