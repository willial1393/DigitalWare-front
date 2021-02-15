import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {Page404Component} from './core/pages/page404/page404.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DxDrawerModule, DxListModule, DxToolbarModule} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    DxToolbarModule,
    DxDrawerModule,
    DxListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
