import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DemoComponent } from './demo/demo.component';
// import { FormsModule } from '@angular/forms';
// import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';



 
@NgModule({
  declarations: [
    AppComponent,
    // DemoComponent,
    // FormcontrolComponent , 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule ,
    MatSlideToggleModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],

  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
