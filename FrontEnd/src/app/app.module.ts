import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ServiceService} from './service.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import{FormsModule, ReactiveFormsModule} from "@angular/forms";
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
