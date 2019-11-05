import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { VehicleService }  from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  vehicle$: Observable<Vehicle>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: VehicleService
  ) {}

  ngOnInit() {
    this.vehicle$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getVehicle(params.get('id')))
    );
  }

  gotoVehicles(vehicle: Vehicle) {
    let vehicleId = vehicle ? vehicle.id : null;
    // Pass along the vehicle id if available
    // so that the VehicleList component can select that vehicle.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/vehicles', { id: vehicleId, foo: 'foo' }]);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/