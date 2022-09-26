import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthguardService } from './services/guards/authguard.service';

const routes: Routes = [ { path:'', component:GoodsComponent } ,
                         { path:'login',component:LoginComponent },
                         { path:'signup', component:SignupComponent},
                         { path:'cart' , component:CartComponent ,canActivate :[AuthguardService] },
                         { path:'admin',component:DashboardComponent,canActivate:[AuthguardService] },
                         { path:'search',component:SearchComponent },
                         
                         { path:'**',component:NotFoundComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
