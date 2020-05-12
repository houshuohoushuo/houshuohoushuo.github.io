import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [    
{ path: 'education',  component: EducationComponent},
{ path: 'skills',     component: SkillsComponent},
{ path: '', redirectTo: '/about', pathMatch: 'full' },
{ path: 'about',  component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
