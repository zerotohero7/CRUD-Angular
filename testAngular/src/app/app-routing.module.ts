import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {path : '' , component : ListPostComponent},
  {path : 'list' , component : ListPostComponent},
  {path : 'add' , component : AddPostComponent},
  {path : 'update/:id' , component : UpdatePostComponent},
  {path : '**' , component : ListPostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
