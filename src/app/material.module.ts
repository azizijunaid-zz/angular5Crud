import { NgModule } from '@angular/core';
// import { MatInputModule } from '@angular/material/input';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatList,
  MatListModule,
  MatListItem,
  MatTableModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class MaterialModule {}