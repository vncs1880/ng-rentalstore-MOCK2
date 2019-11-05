import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Transaction } from './transaction';
import { TRANSACTIONS } from './mock-transactions';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  static nextTransactionId = 100;
  private transactions$: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>(TRANSACTIONS);

  constructor(private messageService: MessageService) { }

  getTransactions() { return this.transactions$; }

  getTransaction(id: number | string) {
    return this.getTransactions().pipe(
      map(transactions => transactions.find(transaction => transaction.id === +id))
    );
  }

  addTransaction(name: string) {
    name = name.trim();
    if (name) {
      let transaction = { id: TransactionService.nextTransactionId++, name };
      TRANSACTIONS.push(transaction);
      this.transactions$.next(TRANSACTIONS);
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/