import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CarsComponent } from './cars/cars.component';


//const routes: Routes = [];
const routes: Routes = [ {path: '', component: HomeComponent}, {path: 'register', component: RegisterComponent}, {path: 'cars', component: CarsComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
