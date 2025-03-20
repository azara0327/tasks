import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{ path: '', component: LazyLoadingComponent }, { path: 'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
