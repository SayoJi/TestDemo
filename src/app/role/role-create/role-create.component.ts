import { OnInit, Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RoleComponent } from './../role.component';
import { TreeNode } from '../role.tree.node';
import { RoleService } from '../../role.service';

@Component({
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})

export class RoleCreateComponent implements OnInit {
  parentRole: TreeNode;

  constructor(private roleService: RoleService, private router: ActivatedRoute,
  private _parent: RoleComponent) {}

  ngOnInit(): void {
    // this.router.paramMap.switchMap(
    //     (params: ParamMap) => this.roleService.getRoleByCode(params.get('code'))
    //     ).subscribe(role => this.parentRole = role);
    // TO DO will delete, and replace by getRoleByCode
    this.roleService.getSingleRole().subscribe(role => this.parentRole = role[0]);
    this.parentRole = this._parent.selectedRole;
  }

}
