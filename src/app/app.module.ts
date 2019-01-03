import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule ,NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { routes } from './routes'

import { MaterialModule } from './comman/material.module';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import { PageContainerComponent } from './containers/page-container/page-container.component';
import { MenuComponent } from './layouts/menu/menu.component';

import {BookService } from './service/book.service';

import { DeleteConfirmDialogComponent } from './dialogs/delete-confirm-dialog/delete-confirm-dialog.component';
import {  MatDialogRef } from '@angular/material';
import { BookListComponent } from './component/book/book-list/book-list.component';
import { BookDetailComponent } from './component/book/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageContainerComponent,
    DeleteConfirmDialogComponent,
    BookListComponent,
    BookDetailComponent
  ],
  entryComponents: [
    DeleteConfirmDialogComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    
  ],
  providers: [
    DatePipe,
    BookService,
     { provide: MatDialogRef, useValue: {} }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

