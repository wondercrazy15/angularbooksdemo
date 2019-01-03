import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUserFromToken();
  }

  adminMenuItems = [
    { title: 'Dashboard', icon: 'dashboard', routerLink: '/dashboard' },
    { title: 'User', icon: 'person', routerLink: '/user' },
    { title: 'Membership', icon: 'card_membership', routerLink: '/membership' },
    { title: 'Category', icon: 'category', routerLink: '/category' },
    { title: 'Role', icon: 'people', routerLink: '/role' },
    { title: 'Message', icon: 'message', routerLink: '/message' },
    //{ title: 'Reports', icon: 'report', routerLink: '/reports' },
  ];

  get menuItems() {
    return this.adminMenuItems
  }

  logout() {
    localStorage.removeItem('key');
    this.router.navigate(['/login']);
  }

  getUserFromToken() {
    let currentUser = JSON.parse(localStorage.getItem('key'));
    if (currentUser) {
      this.username = currentUser[0].username;
    }
  }

}
