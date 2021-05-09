import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialCompsModule } from './material-comps.module';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { NewAlbumFormComponent } from './new-album-form/new-album-form.component';
import { ShowAlbumComponent } from './show-album/show-album.component';
import { UpdateAlbumFormComponent } from './update-album-form/update-album-form.component';
import { AlbumCardComponent } from './album-card/album-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    AlbumListComponent,
    NewAlbumFormComponent,
    ShowAlbumComponent,
    UpdateAlbumFormComponent,
    AlbumCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialCompsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
