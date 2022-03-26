import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../services/add-product.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: string[] = [
    'image',
    'name',
    'slug',
    'brand',
    'category',
    'description',
    'price',
    'countInStock',
    'rating',
    'numReviews',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: AddProductService,private dialog : MatDialog) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.api.getProduct().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res.products);
        console.log(res);

        this.dataSource.paginator = this.paginator;

        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err.message);
        alert('error');
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProduct(row:any){
    this.dialog.open(DialogComponent,
      {width:'30%',
      data:row
    })
  }

  delete(row:any) {
    console.log(row)
  this.api.deleteProduct(row).subscribe({
    next: (res) => {
      alert('Product deleted' )
    }, error: () => {
      alert('Error Product not deleted');
    },
  })
  }
}