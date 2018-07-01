import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  // selector: 'app-navbar',
  templateUrl: './reactiveForms.html',
  styleUrls: ['./reactiveForm.css']
})
export class ReactiveFormComponent implements OnInit {
  categories = ['Food', 'Shipping', 'Clothing', 'Games &amp; Fitness'];
  servicesForm: FormGroup;

  ngOnInit() {
    this.servicesForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.pattern('ABC')]),
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
