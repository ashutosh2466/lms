import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuard } from './gaurds/authentication.guard';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: 'books/library',
    component:LibraryComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'register',
    component:RegisterComponent,
  },
  {
    path: 'users/order',
    component:OrderComponent,
    canActivate:[AuthenticationGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
