import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EditComponent, DialogBoxComponent } from './edit/edit.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogBoxComponent]
})
export class AppModule { }