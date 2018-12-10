import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
//primeng
import {MultiSelectModule} from 'primeng/multiselect';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { SearchTermComponent } from './search-term/search-term.component';
import { AndTermsComponent } from './and-terms/and-terms.component';
import { OrTermsComponent } from './or-terms/or-terms.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchCategoryComponent,
    SearchTermComponent,
    AndTermsComponent,
    OrTermsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MultiSelectModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AndTermsComponent]
})
export class AppModule { }
