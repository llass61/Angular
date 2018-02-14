import { Component, OnInit } from '@angular/core';
import { NavDef } from '../navDef';
import { Security } from '../Security';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  security: Security = new Security();
  navDefList = new NavDef().getDefs();

  selected: any;

  constructor() { }

  ngOnInit() {
  }

  isAllowed(navId: string): boolean
  {
    return this.security.isAllowed(navId);
  }

  showSubMenu(navDefItem: any): boolean
  {
    return navDefItem.showSubMenu;
  }

  toggleSubMenu(navDefItem: any): void
  {
    navDefItem.showSubMenu = !navDefItem.showSubMenu;
  }
}
