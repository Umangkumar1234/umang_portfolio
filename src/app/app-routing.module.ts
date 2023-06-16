import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { PosterComponent } from './poster/poster.component';
import { CertificationComponent } from './certification/certification.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: '', component:PosterComponent,pathMatch:'full' },
  { path: "edu", component: EducationComponent },
  { path: "about", component:AboutComponent },
  { path:"poster",component:PosterComponent},
  { path:"certification",component:CertificationComponent},
  { path: "skills",component:SkillsComponent},
  { path: "works",component:WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
