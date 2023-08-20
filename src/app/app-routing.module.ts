import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './User/contact/contact.component';
import { ProductComponent } from './User/product/product.component';
import { CartComponent } from './User/cart/cart.component';
import { FormComponent } from './Admin/form/form.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './Admin/products/products.component';
import { CreateComponent } from './Admin/create/create.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'contact', component:ContactComponent},
  {path:'cart', component:CartComponent},
  {path:'product', component:ProductComponent},
  {path:'form', component:FormComponent},
  {path:'login', component:LoginComponent},
  {path:'adminproduct', component:ProductsComponent},
  {path:'addproduct', component:CreateComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
