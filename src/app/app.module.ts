import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { KeyComponent } from './key/key.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
