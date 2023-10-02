import RestaurantCard from "./ResCard";
import React , {useEffect} from "react";
import Shimmer from "./Shimmer"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{
    useEffect(()=>{fetchData()} , [])
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0311463&lng=72.587026&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json)
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(listOfRestaurants)
    }
    const [listOfRestaurants , setListOfRestaurants] = React.useState([]);
    const [filteredRestaurants , setFilteredRestaurants] = React.useState([])

    const [searchText , setSearchText] = React.useState("")
    
    if(!useOnlineStatus()){
        return <h1>Looks Like you're offline!</h1>
    }

    if(filteredRestaurants?.length==0){
        return <Shimmer />
    }
    return(
        <div className="body pl-5">
            <div className="search">
                <input className="border border-solid border-black pl-2 hover:bg-pink-50 rounded-xl" placeholder="Search" value={searchText} onChange={(anything)=> setSearchText(anything.target.value)}></input>
                <button className="px-4 py-1 bg-green-100 m-4 rounded-lg hover:bg-green-200" onClick={()=>{
                    const filteredRestaurants =listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredRestaurants(filteredRestaurants)
                }}>Search</button>
                <button className="bg-yellow-100 px-4 py-1 rounded-lg hover:bg-yellow-200" onClick={()=>{
                    setFilteredRestaurants(listOfRestaurants)
                }}>Reset</button>
                <button className="ml-3 px-4 py-1 bg-slate-200 rounded-lg hover:bg-slate-300"  onClick={()=>{
                    const filteredRestaurants = listOfRestaurants.filter((res)=>res?.info?.avgRating >= 4)
                    setFilteredRestaurants(filteredRestaurants)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container flex flex-wrap gap-11">
            {filteredRestaurants?.map((res) => <RestaurantCard key={res?.info?.parentId} resList={res} />)}
            </div>
            
            
        </div>
    )
}

export default Body;