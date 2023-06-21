import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/user/dashboard/dashboard.component';
import { AdminDashboardComponent } from './Pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './Services/admin.guard';
import { NormalGuard } from './Services/normal.guard';
import { ProfileComponent } from './Pages/admin/profile/profile.component';
import { WelcomeComponent } from './Pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './Pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './Pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './Pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './Pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './Pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './Pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './Pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './Pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './Pages/user/instructions/instructions.component';
import { StartComponent } from './Pages/user/start/start.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignUpComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'quiz/:qid',
        component: UpdateQuizComponent,
      },
      {
        path: 'view-questions/:qid/:title',
        component: ViewQuizQuestionsComponent,
      },
      {
        path: 'add-question/:qid/:title',
        component: AddQuestionComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: DashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: ':catId',
        component: LoadQuizComponent,
      },
      {
        path: 'instructions/:qid',
        component: InstructionsComponent,
      },
    ],
  },
  {
    path: 'start/:qid',
    component: StartComponent,
    canActivate: [NormalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
