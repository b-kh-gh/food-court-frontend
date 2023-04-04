import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import {
  FOODS_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_URL,
  FOOD_TAGS_URL,
} from '../constants/url';
import { Food } from '../models/food';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpclient: HttpClient) {}

  getAll(): Observable<Food[]> | any{
      return this.httpclient.get<Food[]>(FOODS_URL);
    //return sample_foods;
  }
  getAllFoodBySearchParam(searchTerm: string): Observable<Food[]> {
    return this.httpclient.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.httpclient.get<Tag[]>(FOOD_TAGS_URL);
  }

  getAllFoodByTag(tag: string): Observable<Food[]> {
    return tag === 'All'
      ? this.getAll()
      : this.httpclient.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }
  getFoodById(foodId: string): Observable<Food> {
    return this.httpclient.get<Food>(FOODS_BY_ID_URL + foodId);
  }
}
