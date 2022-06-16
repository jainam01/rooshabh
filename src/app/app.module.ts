import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './header/home/home.component';
import { MENComponent } from './header/men/men.component';
import { WOMENComponent } from './header/women/women.component';
import { KidsComponent } from './header/kids/kids.component';
import { AboutusComponent } from './header/aboutus/aboutus.component';
import { BoysComponent } from './header/kids/boys/boys.component';
import { GirlsComponent } from './header/kids/girls/girls.component';
import { BabyComponent } from './header/kids/baby/baby.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MENComponent,
    WOMENComponent,
    KidsComponent,
    AboutusComponent,
    BoysComponent,
    GirlsComponent,
    BabyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
