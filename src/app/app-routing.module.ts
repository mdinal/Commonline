import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { TrackingComponent } from './components/tracking/tracking.component';

const routes: Routes = [
  {path:'',component:TrackingComponent},
  {path:'about',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
