import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/shared/services/food.service';
import Swiper,{ SwiperOptions,Autoplay,Navigation, Pagination} from "swiper";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  foodsList: Food[] = [];

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute
  ) {
    let foodsObservable = new Observable<Food[]>();

    // configure Swiper to use modules
    Swiper.use([Navigation, Pagination,Autoplay]);

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
    this.activatedRoute.params.subscribe((params) => {
      let category = params.searchTerm;
    });
  }



  config: SwiperOptions = {
    // slidesPerView:1,
    spaceBetween:30,
    centeredSlides:true,

    autoplay:{ delay: 3000 ,disableOnInteraction:false },

    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    loop:true
  };


  onSlideChange() {
    console.log('slide change');
  }



}
