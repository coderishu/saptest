import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpacexlaunchinfoComponent } from './components/spacexlaunchinfo/spacexlaunchinfo.component';
import { SpacexfiltersComponent } from './components/spacexfilters/spacexfilters.component';
import { SpacexSuccessfullLaunchComponent } from './components/spacex-successfull-launch/spacex-successfull-launch.component';
import { SpacexSuccessfullLandingComponent } from './components/spacex-successfull-landing/spacex-successfull-landing.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacexlaunchinfoComponent,
    SpacexfiltersComponent,
    SpacexSuccessfullLaunchComponent,
    SpacexSuccessfullLandingComponent,
    NotFoundComponent
  ],
  imports: [
    NgxSpinnerModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
