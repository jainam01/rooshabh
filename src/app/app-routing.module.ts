import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';

// routing of innerware
import { BoxerbriefComponent } from './header/MENFILE/INNERWEAR/boxerbrief/boxerbrief.component';
import { TrunkComponent } from './header/MENFILE/INNERWEAR/trunk/trunk.component';
import { InnerbriefComponent } from './header/MENFILE/INNERWEAR/innerbrief/innerbrief.component';
import { BriefComponent } from './header/MENFILE/INNERWEAR/brief/brief.component';

// routing of apparel tops
import { TanktopComponent } from './header/MENFILE/APPAREL TOPS/tanktop/tanktop.component';
import { TShirtComponent } from './header/MENFILE/APPAREL TOPS/t-shirt/t-shirt.component';
import { HoodieComponent } from './header/MENFILE/APPAREL TOPS/hoodie/hoodie.component';

// routing of apparel bottom 
import { BermudasComponent } from './header/MENFILE/APPAREL BOTTOM/bermudas/bermudas.component';
import { BoxershortComponent } from './header/MENFILE/APPAREL BOTTOM/boxershort/boxershort.component';
import { JoggerComponent } from './header/MENFILE/APPAREL BOTTOM/jogger/jogger.component';
import { PyjamaComponent } from './header/MENFILE/APPAREL BOTTOM/pyjama/pyjama.component';
import { ShortComponent } from './header/MENFILE/APPAREL BOTTOM/short/short.component';
import { TrackpantComponent } from './header/MENFILE/APPAREL BOTTOM/trackpant/trackpant.component';

// routing of vests
import{ SleevelessComponent } from './header/MENFILE/VEST/sleeveless/sleeveless.component';
import{ SleevedComponent } from './header/MENFILE/VEST/sleeved/sleeved.component';
import{ GymComponent } from './header/MENFILE/VEST/gym/gym.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  

  // routes of innerware
  { path: 'boxerbrief' , component:BoxerbriefComponent},
  { path: 'trunk' , component:TrunkComponent},
  { path: 'innerbrief' , component:InnerbriefComponent},
  { path: 'brief' , component:BriefComponent},

  //routes of appareltops
  { path: 'tanktop' , component:TanktopComponent},
  { path: 't-shirt' , component:TShirtComponent},
  { path: 'hoodie' , component:HoodieComponent},

  //routes of apparelbottom
  { path: 'bermudas' , component:BermudasComponent},
  { path: 'boxershot' , component:BoxershortComponent},
  { path: 'jogger' , component:JoggerComponent},
  { path: 'pyjama' , component:PyjamaComponent},
  { path: 'short' , component:ShortComponent},
  { path: 'trackpant' , component:TrackpantComponent},

  //routes of vest
  { path: 'sleeved' , component:SleevedComponent},
  { path: 'sleeveless' , component:SleevelessComponent},
  { path: 'gym' , component:GymComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
