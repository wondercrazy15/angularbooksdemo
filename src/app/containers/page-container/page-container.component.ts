import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
