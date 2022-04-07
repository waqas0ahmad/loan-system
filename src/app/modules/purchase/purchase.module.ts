import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { IndexComponent } from './index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ]
})
export class PurchaseModule { }
