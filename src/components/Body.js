import RestaurantCard from "./ResCard";
import React , {useEffect} from "react";
import Shimmer from "./Shimmer"
const Body = ()=>{
    useEffect(()=>{fetchData()} , [])
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0311463&lng=72.587026&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json)
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurants)
    }
    const [listOfRestaurants , setListOfRestaurants] = React.useState([]);
    
    if(listOfRestaurants?.length==0){
        return <Shimmer />
    }
    return(
        <div className="body">
            <div className="search">
                <input placeholder="Search"></input>
                <button onClick={()=>{
                    const filteredRestaurants = listOfRestaurants.filter((res)=>res?.info?.avgRating >= 4)
                    setListOfRestaurants(filteredRestaurants)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {listOfRestaurants?.map((res) => <RestaurantCard key={res?.info?.parentId} resList={res} />)}
            </div>
        </div>
    )
}

export default Body;