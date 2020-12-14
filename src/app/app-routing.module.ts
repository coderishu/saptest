import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexlaunchinfoComponent } from './components/spacexlaunchinfo/spacexlaunchinfo.component';


const routes: Routes = [
  {path:'spacexInfo',component:SpacexlaunchinfoComponent},
  {path:'',redirectTo:'spacexInfo',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
