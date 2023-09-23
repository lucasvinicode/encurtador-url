import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-dialog-success',
  templateUrl: './dialog-success.component.html',
  styleUrls: ['./dialog-success.component.css']
})
export class DialogSuccessComponent {
  link: string = 'tese.com.br';
  constructor(
    public dialogRef: MatDialogRef<DialogSuccessComponent>,
    private clipboard: ClipboardService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.link = data.link
  }

  close(): void {
    this.dialogRef.close();
  }

  copyText(): void {
    this.clipboard.copyFromContent(this.link)
  }

}
