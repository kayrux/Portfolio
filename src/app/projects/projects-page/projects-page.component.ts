import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import projectsJSON from '../../schemas/projects.json';
import { ProjectJSON } from '../project/project.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  projects = (projectsJSON as ProjectJSON).projects;
  constructor(private router: Router) {}
  linkToProject(id: number) {
    this.router.navigateByUrl(`/projects/${id}`);
  }
}
