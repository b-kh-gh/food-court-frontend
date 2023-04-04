import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Food} from 'src/app/shared/models/food';
import {FoodService} from 'src/app/shared/services/food.service';
import {LoaderService} from "../../../shared/services/loader.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foodsList: Food[] = [];
  loading$ = this.loader.isLoading$;


  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute, private loader: LoaderService
  ) {
    let foodsObservable = new Observable<Food[]>();
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        foodsObservable = this.foodService.getAllFoodBySearchParam(
          params['searchTerm']
        );
      } else if (params.tagName) {
        foodsObservable = this.foodService.getAllFoodByTag(params['tagName']);
      } else foodsObservable = this.foodService.getAll();

      foodsObservable.subscribe((serverFoods: Food[]) => {
        this.foodsList = serverFoods;
      });


      // if (params.searchTerm) {
      //   this.foodsList = this.foodService.getAllFoodBySearchParam(
      //     params['searchTerm']
      //   );
      // } else this.foodsList = this.foodService.getAll();
    });
  }

  ngOnInit(): void {
  }


}
