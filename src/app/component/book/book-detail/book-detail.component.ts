import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { DatePipe } from '@angular/common';

import {Book} from '../../../models/book';
import { BookService } from '../../../service/book.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  public book: Book;
  public BookID:string;
  public title="Add";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _bookService: BookService,
    private _toastrService: ToastrService,
    private datePipe: DatePipe
  ) { 
    this.book=new Book();
  }

  ngOnInit() {
    let ID = this.route.snapshot.params['id'];
    if(ID !==undefined && ID !==null){
      this.BookID=ID;
      this.title="Edit"
    }

    
    this.getBookDetail();

  }

  getBookDetail(){
    this.book= this._bookService.getBook(this.BookID);
    this.book.dateOfPublication = new Date(this.book.dateOfPublication);
  }

  addorEditBook(){
    this.book.dateOfPublication=this.datePipe.transform(this.book.dateOfPublication,"yyyy-MM-dd")
    if(this.book.id!==undefined && this.book.id!==null && this.book.id !==""){
      this._bookService.updateBook(this.book);
      this._toastrService.success('Record has been Updated successfully');
    }
    else
    {
      this.book.id= this.guid();
      this._bookService.addBook(this.book);
      this._toastrService.success('Record has been Inserted successfully');
    }
    this.router.navigate(['/booklist']);
  }

   guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
