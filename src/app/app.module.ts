import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './componants/home/home.component';
import { StudentsComponent } from './componants/students/students.component';
import { DetailsComponent } from './componants/details/details.component';
import { ErrorComponent } from './componants/error/error.component';
import { NavBarComponent } from './componants/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    DetailsComponent,
    ErrorComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
         {path:"" ,component: HomeComponent},
         {path:"Home" ,component: HomeComponent},
         {path:"Students" ,component: StudentsComponent},
         {path:"Details" ,component: DetailsComponent},
         {path:"**" ,component: ErrorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
