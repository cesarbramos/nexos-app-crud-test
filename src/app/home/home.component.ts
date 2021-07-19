import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiClient } from '../api-client/ApiClient';
import { NewProductComponent } from '../new-product/new-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'mount', 'date', 'actions'];
  mercancias: MatTableDataSource<any>;

  constructor(private api: ApiClient, private dialog: MatDialog) {
    this.mercancias = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    const url: string = 'http://localhost:8080/get-mercancias';
    this.api.get(url)
    .then(data => {
      this.mercancias = new MatTableDataSource(data.mercancias);
      console.log("mercancias", this.mercancias);
    })
    .catch(err => console.error("Error al procesar la solicitud"))
  }

  create() {
    const ref = this.dialog.open(NewProductComponent, {
      width: '90%',
      maxWidth: '400px'
    })
  }

}
