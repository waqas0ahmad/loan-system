import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyNowPropertyInfo4Component } from './apply-now-property-info4/apply-now-property-info4.component';
import { ApplyNowPropertyInfo5Component } from './apply-now-property-info5/apply-now-property-info5.component';
import { ApplyNowPropertyInfo6Component } from './apply-now-property-info6/apply-now-property-info6.component';
import { ApplyNowPropertyInfo7Component } from './apply-now-property-info7/apply-now-property-info7.component';
import { ApplyNowRefinanceYes2Component } from './apply-now-refinance-yes2/apply-now-refinance-yes2.component';
import { IndexComponent } from './index.component';


const routes: Routes = [{
  path:'',component:IndexComponent,children:[{
    path:'',component:ApplyNowRefinanceYes2Component
  },
  {
    path:'apply-now-property-info',component:ApplyNowPropertyInfo4Component
  },
  {
    path:'apply-now-hoem-address',component:ApplyNowPropertyInfo5Component
  },
  {
    path:'apply-now-property-info6',component:ApplyNowPropertyInfo6Component
  },
  {
    path:'apply-now-property-info7',component:ApplyNowPropertyInfo7Component
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefinancingRoutingModule { }
