import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RoleService } from '../../role.service';
import { TreeNode } from '../role.tree.node';

@Component({
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  selectedRole: TreeNode;

  constructor(private roleService: RoleService,
    private router: ActivatedRoute) {}

  ngOnInit() {
    // TO DO
    // get selected role by id
    // this.router.paramMap.switchMap(
    //     (params: ParamMap) => this.roleService.getRoleByCode(params.get('code'))
    //     ).subscribe(role => this.selectedRole = role);

    // just for test, and will be delete after can get role by code.
    this.roleService.getSingleRole().subscribe(
      role => { this.selectedRole = role['0'];
      console.log(this.selectedRole.code); }
    );
   }
}
