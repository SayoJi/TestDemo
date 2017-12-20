import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoleComponent } from './role/role.component';
import { RoleDetailComponent } from './role/role-detail/role-detail.component';
import { RoleCreateComponent } from './role/role-create/role-create.component';
import { UserComponent } from './user/user.component';

const routerConfig: Routes = [
    { path: 'role', component: RoleComponent,
      children: [
        { path: 'detail/:code', component: RoleDetailComponent },
        { path: 'create', component: RoleCreateComponent },
      ]
    },
    { path: 'user', component: UserComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routerConfig)],
exports: [RouterModule]
})

export class AppRoutingModule {}

