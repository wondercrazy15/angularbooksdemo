import { Injectable } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, takeUntil, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

export interface BookElement {
    id:string,
    name: string,
    numberOfPages: number,
    dateOfPublication: any,
     authors: string[]
  }
  
  const BOOK_DATA: BookElement[] = 


  [
    {
      "id" : "dK0MC2IvX0aMX1VfKxDI1Q",
      "name" : "The Lightning Thief",
      "numberOfPages":700,
      "authors" : ["book","paperback"],
      "dateOfPublication":"1/3/2019",
    }
  ,
    {
      "id" : "BpRM2DLshU6Sc5FUSPxtrg",
      "name" : "The Sea of Monsters",
      "numberOfPages":468,
      "authors" : ["book","paperback"],
      "dateOfPublication":"1/10/2019",
    }
  ,
    {
      "id" : "9QYnMH81Nk-F2YVCwE067A",
      "name" : "Sophie's World : The Greek Philosophers",
      "numberOfPages":800,
      "authors" : ["book","paperback"],
      "dateOfPublication":"1/10/2019",
    }
  ,
    {
      "id" : "2vdK3dY7JUWVgDcR9dcJQg",
      "name" : "Lucene in Action, Second Edition",
      "numberOfPages":600,
      "authors" : ["book","paperback"],
      "dateOfPublication":"1/10/2019",
    },
    {
      "id" : "n8K_i418-0S3X9HJwtQ8jQ",
      "name" : "Learning JavaScript Design Patterns",
      "numberOfPages":1243,
      "authors" : ["book","paperback"],
      "dateOfPublication":"1/10/2019",
    },
    {
      "id" : "FadDKEeHwUCbogKBfjELvw",
      "name" : "Speaking JavaScript",
      "numberOfPages":588,
      "authors" : ["book","paperback"],
      "dateOfPublication":"1/10/2019",
    },
    {
      "id" : "Xdfbgg_7kkSD-GYxlfleEw",
      "name" : "Programming JavaScript Applications",
      "numberOfPages":1000,
      "authors" : ["book","paperback"],
      "dateOfPublication":"1/10/2019",
    },
    {
      "id" : "EW-RM-qiF0S9sGJRYN1q8w",
      "name" : "Understanding ECMAScript 6",
      "numberOfPages":399,
      "authors" : ["book","paperback"],
      "dateOfPublication":"1/10/2019",
    },
    {
      "id" : "Lk74a4lHqU2rClzQJwqDDQ",
      "name" : "Git Pocket Guide",
      "numberOfPages":467,
      "authors" : ["book","paperback"],
      "dateOfPublication":"1/10/2019"
    }, {
      "id" : "k8ISqBcRO0qEf8thcX8F5g",
      "name" : "Designing Evolvable Web APIs with ASP.NET",
      "numberOfPages":1000,
      "authors" : ["book","paperback"],
      "dateOfPublication":"1/10/2019",
    },
  ]

@Injectable()
export class BookService {

    public bookData:Array<any>=BOOK_DATA;
   
  constructor(
    private http: HttpClient,
    private router: Router) {
      
     }
  
  getbooks()
  {
    return this.bookData;
  }

  getBook(id:string){
     
      let bookdata=this.bookData.find(x=>x.id===id);
      if(bookdata!==undefined && bookdata!==null){
          return bookdata;
      }
    return [];
    }

    updateBook(bookdata:any){
        let objIndex = this.bookData.findIndex(x => x.id == bookdata.id);
        if(objIndex !== -1){
           this.bookData[objIndex]=bookdata;
        }
        return this.bookData;
    }

    addBook(bookdata:any){
        if(bookdata !=undefined && bookdata !==null)
        {
            this.bookData.push(bookdata);
        }
    }


}