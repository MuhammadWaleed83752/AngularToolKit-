import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  categories = ['Food', 'Shipping', 'Clothing', 'Games &amp; Fitness'];
  servicesForm: FormGroup;

  ngOnInit() {
    this.servicesForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'details': new FormControl(null, Validators.required),
      'category': new FormControl('Food'),
      'staff': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'duration': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required),
      'latitude': new FormControl(null, Validators.required),
      'longitude': new FormControl(null, Validators.required),
      'publish': new FormControl(null, Validators.required)

    });
  }

  onSubmit() {
    console.log(this.servicesForm.value.username);
    this.servicesForm.reset();
  }

}
