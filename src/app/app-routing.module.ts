import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HompageComponent } from './hompage/hompage.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"footer",component:FooterComponent},
  {path:"contact",component:ContactComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"",component:HompageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent={
  FooterComponent,
  ContactComponent,
  HompageComponent,
  SignUpComponent,
}
