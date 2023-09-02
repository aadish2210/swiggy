import { useParams } from "react-router-dom"
import { useEffect ,useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = (props) => {

    const {resId} = useParams();
    useEffect(()=>{fetchMenu()} , []);
    const [resInfo , setResInfo] = useState([]);

    const fetchMenu = async () =>{
      const data = await fetch(MENU_URL+resId)
      const json = await data.json();
      console.log(json)
      setResInfo(json?.data);
    }
    
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
          {resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[7].card.card.itemCards.map((item)=> <li>{item.card.info.name} - {item.card.info.price/100}₹</li>)}
        </ol>
      </div>
    )

}

export default RestaurantMenu