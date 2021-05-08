import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { NewAlbumFormComponent } from './new-album-form/new-album-form.component';

const routes: Routes = [
  { path: '', component: AlbumListComponent },
  { path: 'new', component: NewAlbumFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
