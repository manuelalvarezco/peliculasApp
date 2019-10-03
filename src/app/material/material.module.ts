import { NgModule } from '@angular/core';
import { 
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule
 } from "@angular/material";

const material = [
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule
]

@NgModule({
  imports: [
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
