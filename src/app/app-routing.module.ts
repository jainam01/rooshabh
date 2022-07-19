import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './header/aboutus/aboutus.component';
import { HomeComponent } from './header/home/home.component';
import { BabyComponent } from './header/kids/baby/baby.component';
import { BoysComponent } from './header/kids/boys/boys.component';
import { GirlsComponent } from './header/kids/girls/girls.component';
import { KidsComponent } from './header/kids/kids.component';
import { MENComponent } from './header/men/men.component';
import { WOMENComponent } from './header/women/women.component';
import { SigninComponent } from './header/signin/signin.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'men', component: MENComponent },
  { path: 'women', component: WOMENComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'boy', component: BoysComponent },
  { path: 'girl', component: GirlsComponent },
  { path: 'baby', component: BabyComponent },
  { path: 'login', component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
