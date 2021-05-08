import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumListComponent } from './album-list/album-list.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { NewAlbumFormComponent } from './new-album-form/new-album-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    AlbumListComponent,
    NewAlbumFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
