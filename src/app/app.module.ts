import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
// import { FormsModule } from '@angular/forms';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthModule } from './features/auth/auth.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductModule } from './features/product/product.module';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';



 
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FormcontrolComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule, 
    // FormsModule ,
    AuthModule,
    
    MatSlideToggleModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],

  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
