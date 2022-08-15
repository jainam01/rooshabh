import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './header/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BriefComponent } from './header/MENFILE/INNERWEAR/brief/brief.component';
import { TrunkComponent } from './header/MENFILE/INNERWEAR/trunk/trunk.component';
import { BoxerbriefComponent } from './header/MENFILE/INNERWEAR/boxerbrief/boxerbrief.component';
import { InnerbriefComponent } from './header/MENFILE/INNERWEAR/innerbrief/innerbrief.component';
import { TanktopComponent } from './header/MENFILE/APPAREL TOPS/tanktop/tanktop.component';
import { TShirtComponent } from './header/MENFILE/APPAREL TOPS/t-shirt/t-shirt.component';
import { HoodieComponent } from './header/MENFILE/APPAREL TOPS/hoodie/hoodie.component';
import { BoxershortComponent } from './header/MENFILE/APPAREL BOTTOM/boxershort/boxershort.component';
import { ShortComponent } from './header/MENFILE/APPAREL BOTTOM/short/short.component';
import { BermudasComponent } from './header/MENFILE/APPAREL BOTTOM/bermudas/bermudas.component';
import { JoggerComponent } from './header/MENFILE/APPAREL BOTTOM/jogger/jogger.component';
import { TrackpantComponent } from './header/MENFILE/APPAREL BOTTOM/trackpant/trackpant.component';
import { PyjamaComponent } from './header/MENFILE/APPAREL BOTTOM/pyjama/pyjama.component';
import { SleevelessComponent } from './header/MENFILE/VEST/sleeveless/sleeveless.component';
import { SleevedComponent } from './header/MENFILE/VEST/sleeved/sleeved.component';
import { GymComponent } from './header/MENFILE/VEST/gym/gym.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BriefComponent,
    TrunkComponent,
    BoxerbriefComponent,
    InnerbriefComponent,
    TanktopComponent,
    TShirtComponent,
    HoodieComponent,
    BoxershortComponent,
    ShortComponent,
    BermudasComponent,
    JoggerComponent,
    TrackpantComponent,
    PyjamaComponent,
    SleevelessComponent,
    SleevedComponent,
    GymComponent,
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
