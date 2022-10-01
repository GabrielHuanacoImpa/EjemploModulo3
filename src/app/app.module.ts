import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Pagina404Component } from './pagina404/pagina404.component';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    
    AppRoutingModule,
    
  ],
  
  declarations: [ AppComponent, Pagina404Component ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
