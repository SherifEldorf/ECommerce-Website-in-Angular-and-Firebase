import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    
    CartComponent,
    GoodsComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent,
    DashboardComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,AngularFireModule.initializeApp({
      apiKey: "AIzaSyBRIwsV4Sil3pEjATcU8fF2r0NAAZiW8ac",
      authDomain: "souq-255e1.firebaseapp.com",
      projectId: "souq-255e1",
      storageBucket: "souq-255e1.appspot.com",
      messagingSenderId: "752392895240",
      appId: "1:752392895240:web:f824d56e9f622d8ac68abd",
      measurementId: "G-2FW8KXDW2K"
    }),
    AngularFirestoreModule,AngularFireAuthModule,AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
