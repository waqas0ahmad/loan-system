import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { IndexComponent } from './index.component';


const routes: Routes = [{
  path:'',component:IndexComponent,children:[
    {
      path:"",component:ApplyNowComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
