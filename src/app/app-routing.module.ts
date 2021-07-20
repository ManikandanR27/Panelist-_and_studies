import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelistComponent } from './panelist/panelist.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudiesComponent } from './studies/studies.component';

const routes: Routes = [
  {path: '', component: SidebarComponent ,children: [
    {
      path: '',
      component: PanelistComponent
    },
    {
      path: 'studies',
      component: StudiesComponent
    },
    {
      path: 'login', 
      component: LoginComponent
    }
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
