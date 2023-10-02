import { Component, Input } from '@angular/core';
import projectsJSON from '../../../assets/schema/projects.json';
import { Project, ProjectJSON } from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projects = (projectsJSON as ProjectJSON).projects;
  project!: Project;

  ngOnInit() {
    const id: number = Number(
      location.pathname.substring(location.pathname.indexOf('/', 1) + 1)
    );

    this.project = this.projects[id];
  }
}
