import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlintpageComponent } from './flintpage/flintpage.component';
import { FlintlistComponent } from './flintlist/flintlist.component';


const routes: Routes = [
  { path: '', component: FlintpageComponent },
  { path: 'flintlist', component: FlintlistComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
