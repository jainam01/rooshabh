import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
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
import { SigninComponent } from './header/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    BabyComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
