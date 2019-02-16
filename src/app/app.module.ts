import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { BetterFormComponent } from './better-form/better-form.component';
import { ControlsComponent } from './controls/controls.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    BetterFormComponent,
    ControlsComponent
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
