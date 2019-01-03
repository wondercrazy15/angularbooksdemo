import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router'

import { MenuComponent } from './layouts/menu/menu.component'
import { AppComponent } from './app.component'
import {BookListComponent} from './component/book/book-list/book-list.component';
import {BookDetailComponent} from './component/book/book-detail/book-detail.component';
import { from } from 'rxjs';

export const routes: Routes = [
  { path: 'booklist', component: BookListComponent },
 { path: '', redirectTo: '/booklist', pathMatch: 'full' },
 { path: 'bookdetail', component: BookDetailComponent },
 { path: 'bookdetail/:id', component: BookDetailComponent },

];
