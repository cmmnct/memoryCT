import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemoryComponent } from './memory/memory.component';
import { CardComponent } from './card/card.component';
import { DuplicateComponent } from './duplicate/duplicate.component';

@NgModule({
  declarations: [AppComponent, MemoryComponent, CardComponent, DuplicateComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
