import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './hooks/hooks.component';
import { ServicesComponent } from './Services/services.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormForwardRefComponent } from './form-forward-ref/form-forward-ref.component';
import { ToggleComponent } from './toggle/toggle.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component'
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    ServicesComponent,
    DependencyInjectionComponent,
    FormsComponent,
    FormForwardRefComponent,
    ToggleComponent,
    PromiseComponent,
    ObservableComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
