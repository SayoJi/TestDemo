import { Component, OnInit } from '@angular/core';
import { MenuItem, Message} from 'primeng/primeng';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';
import { TreeNode } from './role.tree.node';

@Component({
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})

export class RoleComponent implements OnInit {
  roles: TreeNode[];
  public selectedRole: TreeNode;
  rightClickMenu: MenuItem[];
  msgs: Message[];
  newTreeNode: TreeNode;

  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit() {
    // all roles
    this.roleService.getRoles().subscribe(roles => this.roles = roles);

    this.rightClickMenu = [
      {label: 'Create', icon: '', command: (event) => this.createRole()},
      {label: 'Delete', icon: '', command: (event) => this.viewFile(this.selectedRole)},
    ];

  }

  viewFile(file: TreeNode) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Selected with Right Click', detail: file.label});
  }

  // when select (click), show the role detail
  nodeSelect() {
    this.router.navigate(['/role/detail', this.selectedRole.code]);
  }

  // right click, and click create button
  createRole() {
    this.router.navigate(['/role/create']);
  }

  // right click, and click delete button
  deleteRole() {

  }

}
