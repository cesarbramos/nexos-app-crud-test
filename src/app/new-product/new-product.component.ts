import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  form: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required)
  })

  constructor(private ref: MatDialogRef<NewProductComponent> ) { }

  ngOnInit(): void {
  }

}
