import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
