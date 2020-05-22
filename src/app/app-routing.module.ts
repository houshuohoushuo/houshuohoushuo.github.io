import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { LifeComponent } from './life/life.component';
const routes: Routes = [    
{ path: 'education',  component: EducationComponent},
{ path: 'skills',     component: SkillsComponent},
{ path: '', redirectTo: '/about', pathMatch: 'full' },
{ path: 'shuo-website', redirectTo: '/about', pathMatch: 'full' },
{ path: 'about',  component: AboutComponent },
{ path: 'projects', component:ProjectsComponent},
{ path: 'life', component:LifeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
