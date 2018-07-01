import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactiveForms/reactiveForms';
import { TosterServiceComponent } from './services/notifyService/toster-service.component';
import { MapServiceComponent } from './services/maps/map.component';
import { FileUploadComponent } from './services/fileUploader/fileUploader.component';
export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reactiveForms',
    component: ReactiveFormComponent
  },
  {
    path: 'tosterService',
    component: TosterServiceComponent
  },
  {
    path: 'mapService',
    component: MapServiceComponent
  },
  {
    path: 'fileUploder',
    component: FileUploadComponent
  }
];

