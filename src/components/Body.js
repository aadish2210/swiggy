import RestaurantCard from "./ResCard";
import { resData } from "../utils/resData";
import React from "react";
const Body = ()=>{
    const [listOfRestaurants , setListOfRestaurants] = React.useState(resData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    return(
        <div className="body">
            <div className="search">
                <input placeholder="Search"></input>
                <button onClick={()=>{
                    const filteredRestaurants = resData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.filter((res)=>res.info.avgRating >= 4)
                    setListOfRestaurants(filteredRestaurants)
                }}>Top Rated Restaurants</button>
                <button onClick={()=>{
                    setListOfRestaurants(resData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
                }}>Reset</button>
            </div>
            <div className="res-container">
            {listOfRestaurants.map((restaurant) => <RestaurantCard  key={restaurant.info.feeDetails.restaurantId} resList={restaurant} />)}
            </div>
        </div>
    )
}

export default Body;