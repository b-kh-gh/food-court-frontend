 //const BASE_URL = 'http://localhost:5000';
// const BASE_URL = 'http://localhost:9000/.netlify/functions';
 const BASE_URL = ' https://food-courtbackend.netlify.app/.netlify/functions';


export const FOODS_URL = BASE_URL + '/api/foods';
export const FOOD_TAGS_URL = FOODS_URL + '/tags';
export const FOODS_BY_SEARCH_URL = FOODS_URL + '/search/';
export const FOODS_BY_TAG_URL = FOODS_URL + '/tag/';
export const FOODS_BY_ID_URL = FOODS_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
