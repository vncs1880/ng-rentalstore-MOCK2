import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { ActorService }  from '../actor.service';
import { Actor } from '../actor';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  actor$: Observable<Actor>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ActorService
  ) {}

  ngOnInit() {
    this.actor$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getActor(params.get('id')))
    );
  }

  gotoActors(actor: Actor) {
    let actorId = actor ? actor.id : null;
    // Pass along the actor id if available
    // so that the ActorList component can select that actor.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/actors', { id: actorId, foo: 'foo' }]);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/