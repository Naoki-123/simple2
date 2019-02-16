import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { BetterFormComponent } from './better-form/better-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    BetterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
