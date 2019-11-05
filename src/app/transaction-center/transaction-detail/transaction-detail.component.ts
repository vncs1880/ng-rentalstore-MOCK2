import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Transaction }         from '../transaction';
import { DialogService }  from '../../dialog.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  transaction: Transaction;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { transaction: Transaction }) => {
        this.editName = data.transaction.name;
        this.transaction = data.transaction;
      });
  }

  cancel() {
    this.gotoTransactions();
  }

  save() {
    this.transaction.name = this.editName;
    this.gotoTransactions();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no transaction or the transaction is unchanged
    if (!this.transaction || this.transaction.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  gotoTransactions() {
    let transactionId = this.transaction ? this.transaction.id : null;
    // Pass along the transaction id if available
    // so that the TransactionListComponent can select that transaction.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the transactions
    this.router.navigate(['../', { id: transactionId, foo: 'foo' }], { relativeTo: this.route });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/