import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoHomeComponent } from './info-home/info-home.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';


const routes: Routes = [
  { path: '', component: InfoHomeComponent },
  { path: 'getting-started', component: GettingStartedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
