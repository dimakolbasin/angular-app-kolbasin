import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {MainComponent} from './components/main/main.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {DeviceComponent} from './components/device/device.component';
import {LocalStorageGuard} from './guards/local-storage.guard';



const routes: Routes = [
  {path: 'user-profile', component: UserProfileComponent, canActivate: [LocalStorageGuard]},
  {path: 'products', component: MainComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products/:id', component: DeviceComponent},
  {path: '**', component: PageNotFoundComponent}
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
