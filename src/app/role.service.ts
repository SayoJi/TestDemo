import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { TreeNode } from './role/role.tree.node';
import { Http } from '@angular/http';


@Injectable()
export class RoleService {
  private rolesUrl = 'assets/mock-data/role-data.json';
  // private rolesUrl = 'assets/mock-data/exaple-data.json';
  private roleUrl = 'assets/mock-data/one-role-data.json';

  constructor(private http: Http) {}

 getRoles(): Observable<TreeNode[]> {
    return this.http
               .get(this.rolesUrl)
               .map(response => response.json().data as TreeNode[]);
 }

 // get role by code
 getRoleByCode(code: string): Observable<TreeNode> {
  const url = `${this.rolesUrl}/:${code}`;
  return this.http
             .get(url)
             .map(role => role.json().data as TreeNode);
 }

 // just for test role detail show, instead of getRoleByCode
 getSingleRole(): Observable<TreeNode> {
  return this.http
             .get(this.roleUrl)
             .map(response => response.json().data as TreeNode);
}

}
