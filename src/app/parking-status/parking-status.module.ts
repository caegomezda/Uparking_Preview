import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingStatusPageRoutingModule } from './parking-status-routing.module';

import { ParkingStatusPage } from './parking-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingStatusPageRoutingModule
  ],
  declarations: [ParkingStatusPage]
})
export class ParkingStatusPageModule {}
