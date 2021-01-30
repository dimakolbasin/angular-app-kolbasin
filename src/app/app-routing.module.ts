import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {MainComponent} from './components/main/main.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {DeviceComponent} from './components/device/device.component';
import {LocalStorageGuard} from './guards/local-storage.guard';
import {AddProductComponent} from './components/add-product/add-product.component';



const routes: Routes = [
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'products', component: MainComponent},
  {path: 'admin/add', component: AddProductComponent, canActivate: [LocalStorageGuard]},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products/:id', component: DeviceComponent},
  {path: '**', component: PageNotFoundComponent}
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
