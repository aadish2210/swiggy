import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = (props) => {

     const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    // const categories = groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // console.log(categories)
    
    if(resInfo.length==0)
    return <Shimmer />

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories);
    
    const {name , cuisines , costForTwoMessage} = resInfo.cards[0].card.card.info;  
      return (
      <div className="text-center">
        <h1 className="font-bold text-2xl mt-5 bg-lime-100 p-10 shadow-lg">{name}</h1>
        <h3 className="text-xl font-semibold mt-5">{cuisines.join(", ")}</h3>
        <h3 className="text-lg font-semibold">{costForTwoMessage}</h3>
        {categories.map( res => <RestaurantCategory data={res?.card?.card}/>)}
      </div>
    )

}

export default RestaurantMenu