import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './views/user/user-list/user-list.component';
import { UserCreateComponent } from './views/user/user-create/user-create.component';
import { UserEditComponent } from './views/user/user-edit/user-edit.component';
import { UserDetailComponent } from './views/user/user-detail/user-detail.component';


const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'user-edit/:id', component: UserEditComponent},
  { path: 'user-detail/:id', component: UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
