import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects/projects-page/projects-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectComponent } from './projects/project/project.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsPageComponent,
  },
  {
    path: 'projects/:id',
    component: ProjectComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
