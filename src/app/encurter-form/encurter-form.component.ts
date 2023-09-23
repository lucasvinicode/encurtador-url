import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog'
import { DialogSuccessComponent } from '../dialog-success/dialog-success.component';
import { DialogServiceService } from '../services/dialog-service.service';

@Component({
  selector: 'app-encurter-form',
  templateUrl: './encurter-form.component.html',
  styleUrls: ['./encurter-form.component.css']
})
export class EncurterFormComponent {
  link = new FormControl('', [Validators.required]);

  constructor(
    private http: HttpClient,
    private dialog: DialogServiceService
  ){

  }

  getErrorMessage() {
    if (this.link.hasError('required')) {
      return 'You must enter a value';
    }

    return this.link.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(){
    const params = new HttpHeaders().set('X-Curto-Api-Key', 'ct_L6UevnIIBaI8ZbJGT29wwL6kuf0xAgvS')
    this.http.post<ResultEncurter>('https://api.curto.io/v1/links', {link: this.link.value}, {headers: params}).subscribe(
      (result) => {
        this.dialog.openDialog(result.data.short_link)
        console.log(result)
      },
      (error) => console.error(error)
    );
  }
}

export interface ResultEncurter {
  data: Data,
  status: string
}

export interface Data {
    id: string,
    destination: string,
    token:  string,
    short_link:  string,
    domain_id: string,
    domain:  string,
    password: boolean,
    created_at: string,
    updated_at: string,
    clicks: number
}