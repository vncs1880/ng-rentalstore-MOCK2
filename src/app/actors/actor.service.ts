import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Actor } from './actor';
import { ACTORS } from './mock-actors';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class ActorService {

  constructor(private messageService: MessageService) { }

  getActors(): Observable<Actor[]> {
    // TODO: send the message _after_ fetching the actors
    this.messageService.add('ActorService: fetched actors');
    return of(ACTORS);
  }

  getActor(id: number | string) {
    return this.getActors().pipe(
      // (+) before `id` turns the string into a number
      map((actors: Actor[]) => actors.find(actor => actor.id === +id))
    );
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
