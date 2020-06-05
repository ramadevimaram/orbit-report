import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
//import { OrbitCouComponent } from './orbit-cou/orbit-cou.component';
import { OrbitCountsComponent } from './orbit-counts/orbit-counts.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent,
    //OrbitCouComponent,
    OrbitCountsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
