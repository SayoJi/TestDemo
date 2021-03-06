import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { RoleDetailComponent } from './role/role-detail/role-detail.component';
import { RoleCreateComponent } from './role/role-create/role-create.component';
import { AppRoutingModule } from './app-routing.module';
import { GrowlModule, TreeModule, ContextMenuModule } from 'primeng/primeng';
import { RoleService } from './role.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    RoleDetailComponent,
    RoleCreateComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GrowlModule,
    TreeModule,
    ContextMenuModule,
    HttpModule,
    FormsModule,
  ],
  providers: [
    RoleService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
