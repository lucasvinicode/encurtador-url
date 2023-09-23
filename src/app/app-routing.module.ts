import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncurterFormComponent } from './encurter-form/encurter-form.component';

const routes: Routes = [
  {path: '', component: EncurterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
