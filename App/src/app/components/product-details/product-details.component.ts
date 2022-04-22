import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class productDetailsComponent implements OnInit {

  currentproduct: Product = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getproduct(this.route.snapshot.params.id);
  }

  getproduct(id: string): void {
    this.productService.get(id)
      .subscribe(
        data => {
          this.currentproduct = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentproduct.title,
      description: this.currentproduct.description,
      published: status
    };

    this.message = '';

    this.productService.update(this.currentproduct.id, data)
      .subscribe(
        response => {
          this.currentproduct.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateproduct(): void {
    this.message = '';

    this.productService.update(this.currentproduct.id, this.currentproduct)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This product was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteproduct(): void {
    this.productService.delete(this.currentproduct.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/products']);
        },
        error => {
          console.log(error);
        });
  }

}
