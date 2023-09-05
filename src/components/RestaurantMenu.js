import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = (props) => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if(resInfo.length==0)
    return <Shimmer />
    const {name , cuisines , costForTwoMessage} = resInfo.cards[0].card.card.info;  
      return (
      <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ol>
          {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card?.itemCards?.map((item)=> <li>{item?.card?.info?.name} - {item?.card?.info?.price/100}₹</li>)}
        </ol>
      </div>
    )

}

export default RestaurantMenu