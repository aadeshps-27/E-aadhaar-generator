import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateAadhaarComponent } from './create-aadhaar/create-aadhaar.component';
import { UpdateAadhaarComponent } from './update-aadhaar/update-aadhaar.component';
import { VieweAadhaarComponent } from './viewe-aadhaar/viewe-aadhaar.component';
import {  HttpClientModule } from "@angular/common/http";
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminPageComponent,
    CreateAadhaarComponent,
    UpdateAadhaarComponent,
    VieweAadhaarComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
