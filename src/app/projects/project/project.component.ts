import { Component, Input } from '@angular/core';
import { Project, projects, DisplayCardType } from './project.model';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projects = projects;
  public project!: Project;
  DisplayCardType = DisplayCardType;

  constructor(
    public projectsService: ProjectsService,
    private router: Router
  ) {}
  ngOnInit() {
    const id: number = Number(
      this.router.url.substring(this.router.url.indexOf('projects/') + 9)
    );
    this.project = this.projects[id];
    console.log('project: ', this.project);
  }
}
