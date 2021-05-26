import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployerComponent } from './components/list-employer/list-employer.component';
import { AddEditEmployerComponent } from './components/add-edit-employer/add-edit-employer.component';


const routes: Routes = [
  { path: '', component: ListEmployerComponent },
  { path: 'add', component: AddEditEmployerComponent },
  { path: 'edit/:id', component: AddEditEmployerComponent },
  { path: '**', component: ListEmployerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
