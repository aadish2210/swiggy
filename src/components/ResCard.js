import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) =>{
    console.log(props)
    const imageId = props.resList.info.cloudinaryImageId;
    return(
        <Link className="res-card" to={`/restaurants/${props.resList.info.feeDetails.restaurantId}`} style={{textDecoration:"none" , color:"black"}}> 
            <div className="res-details">
            <img className="res-img" alt="res-image" src={CDN_URL + imageId}/>
            <h3>{props.resList.info.name}</h3>
            <h4>{props.resList.info.cuisines.join(", ")}</h4>
            <h4>{props.resList.info.costForTwo}</h4>
            <h4>{props.resList.info.avgRating} stars</h4>
            <h4>{props.resList.info.sla.slaString}</h4>
            </div>
        </Link>
    )
}

export default RestaurantCard;