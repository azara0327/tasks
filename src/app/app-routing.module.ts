import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import {AppComponent} from './app.component';
import {FormsComponent} from './forms/forms.component';
import { ServicesComponent } from './Services/services.component';
import { HooksComponent } from './hooks/hooks.component';
import { FormForwardRefComponent } from './form-forward-ref/form-forward-ref.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: 'dependency-injection', component: DependencyInjectionComponent
  },
  {
    path: 'forms', component: FormsComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'hooks', component: HooksComponent
  },
  {
    path: 'io', component: ParentComponent
  },
  {
    path : 'forwardref', component: FormForwardRefComponent
  },
  {
    path : 'promise', component: PromiseComponent
  },
  {
    path: 'observable', component: ObservableComponent
  },
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
