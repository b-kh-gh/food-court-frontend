import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/shared/models/food';
import { CartService } from 'src/app/shared/services/cart.service';
import { FoodService } from 'src/app/shared/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent {
  food!: Food;
  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    private foodService: FoodService,
    private cartService: CartService
  ) {
    activatedRoute.params.subscribe((params) => {
      // if (params.id) this.food = this.foodService.getFoodById(params.id);
      if (params.id)
        this.foodService.getFoodById(params.id).subscribe((serverFood) => {
          this.food = serverFood;
        });
    });
  }

  addTocart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
