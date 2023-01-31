import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingStatusPage } from './parking-status.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingStatusPageRoutingModule {}
