import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) =>{
    console.log(props)
    const imageId = props.resList.info.cloudinaryImageId;
    return(
        <Link className="res-card w-52 border border-solid border-slate-300 p-2 bg-slate-100 rounded-lg hover:bg-slate-200" to={`/restaurants/${props.resList.info.feeDetails.restaurantId}`} style={{textDecoration:"none" , color:"black"}}> 
            <div className="res-details">
            <img className="res-img rounded-md" alt="res-image" src={CDN_URL + imageId}/>
            <div className="pt-2">
            <h3 className="font-bold text-lg">{props.resList.info.name}</h3>
            <h4>{props.resList.info.cuisines.join(", ")}</h4>
            <h4>{props.resList.info.costForTwo}</h4>
            <h4>{props.resList.info.avgRating} stars </h4>
            <h4>{props.resList.info.sla.slaString}</h4>
            </div>
            </div>
        </Link>
    )
}


export default RestaurantCard;