import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HamperComponent } from './hamper/hamper.component';

import { Hamper } from './classes/hamper';
import { Category } from './classes/category';

import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, routing, FormsModule, HttpModule],
    declarations: [AppComponent, HamperComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}