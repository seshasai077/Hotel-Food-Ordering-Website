import axios from "axios"

class FoodItems {

    static getAllFoodItems(){
        let serverURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
        return axios.get(serverURL)
    }

}
export default FoodItems