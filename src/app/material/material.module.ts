import { NgModule } from '@angular/core';
import { 
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatIconModule
 } from "@angular/material";

const material = [
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatIconModule
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
