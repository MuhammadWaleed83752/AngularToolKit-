import { Component } from '@angular/core';
import { TosterServiceService } from './toster-service.service';

@Component({
  selector: 'app-notify-service',
  templateUrl: './toster-service.component.html',
  // styleUrls: [``]
})
export class TosterServiceComponent {


  constructor(private tosterService: TosterServiceService) {}

  Success() {
    this.tosterService.Success('success called');
  }

  Info() {
    this.tosterService.Info('Info called');
  }

  warning() {
    this.tosterService.Warning('warning called');
  }

  error() {
    this.tosterService.Error('error called');
  }
}
