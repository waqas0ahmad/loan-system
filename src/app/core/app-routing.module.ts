import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'purchase', pathMatch: 'full' },
  {
    path:'purchase',loadChildren:()=>import('./../modules/purchase/purchase.module').then(x=>x.PurchaseModule)
  },
  {
    path:'refinance',loadChildren:()=>import('./../modules/refinancing/refinancing.module').then(x=>x.RefinancingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
