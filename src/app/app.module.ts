import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MemoryComponent } from './memory/memory.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, MemoryComponent, CardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
