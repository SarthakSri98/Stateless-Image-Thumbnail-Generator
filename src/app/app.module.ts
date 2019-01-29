import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ThumbNailComponent } from './thumb-nail/thumb-nail.component';

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
    BrowserModule,ReactiveFormsModule,FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
