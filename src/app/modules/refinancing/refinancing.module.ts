import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefinancingRoutingModule } from './refinancing-routing.module';
import { IndexComponent } from './index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    RefinancingRoutingModule
  ]
})
export class RefinancingModule { }
