import { Component, OnInit, ViewChild } from '@angular/core';
import { DeleteConfirmDialogComponent } from '../../../dialogs/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator, MatTableDataSource,MatSort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { BookService } from '../../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'numberOfPages', 'authors','dateOfPublication','actionsColumn'];
  dataSource :any;
  BookData:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    public dialog: MatDialog,
    private _toastrService: ToastrService,
    public _bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.GetBooks();

  }

  GetBooks() {
    let bookData= this._bookService.getbooks()
    this.BookData=bookData;
    this.dataSource = new MatTableDataSource<any>(bookData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(rowData: any) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      disableClose: true
    }).afterClosed().subscribe(item => {
      if (item == "confirm") {
        var objIndex = this.dataSource.data.findIndex(obj => obj.id == rowData.id);
        this.dataSource.data.splice(objIndex, 1);
        this.dataSource = new MatTableDataSource<any>(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
        this._toastrService.success('Record has been deleted successfully');
      }
    });
  }

}
