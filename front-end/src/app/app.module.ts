import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MobxAngularModule} from 'mobx-angular';
import {SharedModule} from 'src/app/shared/shared.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    MobxAngularModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
