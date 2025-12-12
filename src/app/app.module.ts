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
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { ProductdetailComponent } from './features/product/productdetail/productdetail.component';
import { FilesModule } from './features/files/files.module';

 
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FormcontrolComponent,
    ParentComponent,
    ChildComponent,
    FooterComponent,
   
  
  ],
  imports: [
    BrowserModule,
    FilesModule , 
    ProductModule,
    
    AppRoutingModule,
    // FormsModule ,
    AuthModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    SharedModule,
  ],

  providers: [  HeaderComponent  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
