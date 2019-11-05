import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { TransactionService }  from '../transaction.service';
import { Transaction }         from '../transaction';
import { Observable }     from 'rxjs';
import { switchMap }      from 'rxjs/operators';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions$: Observable<Transaction[]>;
  selectedId: number;

  constructor(
    private service: TransactionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.transactions$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getTransactions();
      })
    );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/