import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactiveForms/reactiveForms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { FileUploadService } from './services/fileUploader/fileUploadService';
import { TosterServiceService } from './services/notifyService/toster-service.service';
import { TosterServiceComponent } from './services/notifyService/toster-service.component';
import { MapServiceComponent } from './services/maps/map.component';
import { FileUploadComponent } from './services/fileUploader/fileUploader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReactiveFormComponent,
    TosterServiceComponent,
    MapServiceComponent,
    FileUploadComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQlMMVsJXt25cmmii1rx_Ghn0bjRRNdtc',
      libraries: ['places']
    }),
    HttpClientModule
  ],
  providers: [FileUploadService, TosterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
