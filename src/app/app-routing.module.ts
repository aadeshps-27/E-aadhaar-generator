import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateAadhaarComponent } from './create-aadhaar/create-aadhaar.component';
import { UpdateAadhaarComponent } from './update-aadhaar/update-aadhaar.component';
import { VieweAadhaarComponent } from './viewe-aadhaar/viewe-aadhaar.component';

const routes: Routes = [
  {
    path:'',redirectTo:"home/admin",pathMatch:"full"
  },
  {
    path:'home/admin',component:AdminPageComponent
  },
  {
    path:'home/create',component:CreateAadhaarComponent
  },
  {
    path:'home/update/:uid',component:UpdateAadhaarComponent
  },
  {
    path:'home/view/:useruid',component:VieweAadhaarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
