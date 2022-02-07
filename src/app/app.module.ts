import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HotkeyModule } from 'angular2-hotkeys';

import { AppComponent } from './app.component';
import { FloatingMenuComponent } from './floating-menu/floating-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatingMenuComponent
  ],
  imports: [
    BrowserModule,
    HotkeyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
