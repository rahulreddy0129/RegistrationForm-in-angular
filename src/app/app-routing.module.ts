import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTaskComponent } from './form-task/form-task.component';

const routes: Routes = [
  {path: '', component: FormTaskComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
