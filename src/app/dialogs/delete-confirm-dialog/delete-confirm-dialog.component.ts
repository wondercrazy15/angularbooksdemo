import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { ToastrService } from 'ngx-toastr';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.css']
})
export class DeleteConfirmDialogComponent implements OnInit {

  public ID: any;
  public URL: string;

  constructor(
    public MatDialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    public _toastrService: ToastrService,

    private router: Router
    
  ) { }

  ngOnInit() {
    
  }
}
