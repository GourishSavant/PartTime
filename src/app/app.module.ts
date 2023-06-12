import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Component/footer/footer.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './Services/authinterceptor';
import { DashboardComponent } from './Pages/user/dashboard/dashboard.component';
import { AdminDashboardComponent } from './Pages/admin/admin-dashboard/admin-dashboard.component';
import { AddCategoryComponent } from './Pages/admin/add-category/add-category.component';
import { SidebarComponent } from './Pages/admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './Pages/admin/welcome/welcome.component';
import { ProfileComponent } from './Pages/admin/profile/profile.component';
import { AddQuestionComponent } from './Pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './Pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './Pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './Pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './Pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './Pages/admin/view-quizzes/view-quizzes.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoadQuizComponent } from './Pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './Pages/user/instructions/instructions.component';
import { UserSidebarComponent } from './Pages/user/user-sidebar/user-sidebar.component';
import { StartComponent } from './Pages/user/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    AdminDashboardComponent,
    AddCategoryComponent,
    SidebarComponent,
    WelcomeComponent,
    ProfileComponent,
    AddQuestionComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewCategoriesComponent,
    ViewQuizQuestionsComponent,
    ViewQuizzesComponent,
    LoadQuizComponent,
    InstructionsComponent,
    UserSidebarComponent,
    StartComponent,
   
  
   

  
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    CKEditorModule
  
    

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
