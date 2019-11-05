// TODO: Feature Componetized like TransactionCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VehicleService }  from '../vehicle.service';
import { Vehicle } from '../vehicle';

// import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles$: Observable<Vehicle[]>;
  selectedId: number;

  constructor(
    private service: VehicleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.vehicles$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getVehicles();
      })
    );
  }

    settings = {
        columns: {
            id:{title:'Id'},
            plate: { title: 'Plate' },
            type: { title: 'Type' },
            make: { title: 'Make' },
            model: { title: 'Model' },
            year: { title: 'Year' },
            color: { title: 'Color' },
        }
    };
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
