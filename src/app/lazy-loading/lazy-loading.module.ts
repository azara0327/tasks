import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    LazyLoadingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule { }
