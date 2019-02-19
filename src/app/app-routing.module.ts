import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { BetterFormComponent } from './better-form/better-form.component';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', redirectTo: './simple-form', pathMatch: 'full'},
      {path: 'simple-form', component: SimpleFormComponent},
      {path: 'better-form', component: BetterFormComponent},
      {path: 'controls', component: ControlsComponent}
    ])
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
