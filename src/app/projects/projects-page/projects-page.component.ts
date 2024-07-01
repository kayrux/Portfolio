import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { projects } from '../project/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  projects = projects;
  // public projects: Project[] = [];
  constructor(
    private router: Router,
    public projectsService: ProjectsService
  ) {}

  ngOnInit() {
    // this.projects = this.projectsService.projects;
  }
  linkToProject(id: number) {
    this.router.navigateByUrl(`/projects/${id}`);
  }
}
