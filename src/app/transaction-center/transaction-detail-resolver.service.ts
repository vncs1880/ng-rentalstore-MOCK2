
import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

import { TransactionService }  from './transaction.service';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionDetailResolverService implements Resolve<Transaction> {
  constructor(private cs: TransactionService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Transaction> | Observable<never> {
    let id = route.paramMap.get('id');

    return this.cs.getTransaction(id).pipe(
      take(1),
      mergeMap(transaction => {
        if (transaction) {
          return of(transaction);
        } else { // id not found
          this.router.navigate(['/transaction-center']);
          return EMPTY;
        }
      })
    );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/