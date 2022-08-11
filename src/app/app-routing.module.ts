import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';

// routing of innerware
import { BoxerbriefComponent } from './header/MENFILE/INNERWEAR/boxerbrief/boxerbrief.component';
import { TrunkComponent } from './header/MENFILE/INNERWEAR/trunk/trunk.component';
import { InnerbriefComponent } from './header/MENFILE/INNERWEAR/innerbrief/innerbrief.component';
import { BriefComponent } from './header/MENFILE/INNERWEAR/brief/brief.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  

  // routes of innerware
  { path: 'boxerbrief' , component:BoxerbriefComponent},
  { path: 'trunk' , component:TrunkComponent},
  { path: 'innerbrief' , component:InnerbriefComponent},
  { path: 'brief' , component:BriefComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
