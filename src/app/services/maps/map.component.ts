import { Component, OnInit, NgZone, ElementRef, ViewChild} from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-map-service',
  templateUrl: './maps.component.html',
  // styleUrls: [``]
})
export class MapServiceComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

    @ViewChild('search') public searchElementRef: ElementRef;

    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}
  ngOnInit() {
   // ____________Google map Autocomplete code starts
      // create search FormControl
      this.searchControl = new FormControl();


      // load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ['address']
        });
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            // get the place result
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();

            // verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

          });
        });
      });

      // ___________________GoogleMap AutoComplete code Ends
  }
}
