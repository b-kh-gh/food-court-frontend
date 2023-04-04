import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import {NotFoundComponent} from "./components/pages/not-found/not-found.component";
import {AuthGuardService} from "./shared/services/auth-guard.service";

const routes: Routes = [

  { path: '', component: HomeComponent ,pathMatch:"full"},
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent,canActivate:[AuthGuardService] },
  { path: 'tag/:tagName', component: HomeComponent },
  { path: 'login', component: LoginComponent },
     { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
