import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
	products$: any;

  constructor(
		private productService: ProductService
	) { }

  ngOnInit() {

		this.products$ = this.productService.getProducts();

  }

}
