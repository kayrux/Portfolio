import { Component, Input } from '@angular/core';
import projectsJSON from '../../../assets/schema/projects.json';
import { Project, ProjectJSON } from './project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projects = (projectsJSON as ProjectJSON).projects;
  // public projects: Project[] = [];
  public project!: Project;
  constructor(public projectsService: ProjectsService) {}
  ngOnInit() {
    // this.projects = this.projectsService.projects;
    const id: number = Number(
      location.pathname.substring(location.pathname.indexOf('projects/') + 9)
    );
    this.project = this.projects[id];
  }
}
