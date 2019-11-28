import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';
import {MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class AngularMaterialModule {}