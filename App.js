import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import { resData } from "./resData";
// data.cards[5].card.card.gridElements.infoWithStyle.restaurants

const RestaurantCard = (props) =>{
    const imageId = props.resList.info.cloudinaryImageId;
    return(
        <div className="res-card">
            <div className="res-details">
            <img className="res-img" alt="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId}/>
            <h3>{props.resList.info.name}</h3>
            <h4>{props.resList.info.cuisines.join(", ")}</h4>
            <h4>{props.resList.info.costForTwo}</h4>
            <h4>{props.resList.info.avgRating} stars</h4>
            <h4>{props.resList.info.sla.slaString}</h4>
            </div>
        </div>
    )
}
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">
                <input placeholder="Search"></input>
            </div>
            <div className="res-container">
            {resData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.map((restaurant) => <RestaurantCard  key={restaurant.info.feeDetails.restaurantId} resList={restaurant} />)}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div>
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);