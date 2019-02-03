import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ThumbNailComponent } from './thumb-nail/thumb-nail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';

var routes : Routes = [
  { path:'', component:LoginComponent },
  { path:'thumbnail', component:ThumbNailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThumbNailComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule, HttpClientModule, RouterModule.forRoot(routes), BrowserAnimationsModule
    ,MatSnackBarModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
