import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {ResultComponent} from "./result/result.component";
import {BookingComponent} from "./booking/booking.component";

const routes: Routes = [{ path: '', component: SearchComponent },{ path: 'result/:type/:value', component: ResultComponent },{ path: 'booking/:id', component: BookingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
