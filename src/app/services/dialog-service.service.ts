import { Injectable } from '@angular/core';
import { DialogSuccessComponent } from '../dialog-success/dialog-success.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(
    private dialog: MatDialog
  ){

  }

  openDialog(link: string){
    return this.dialog.open(DialogSuccessComponent,{
      width: '800px',
      data: {
        link: link
      }
    }).afterClosed();
  }
}
