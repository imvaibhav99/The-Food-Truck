import {CDN_URL} from "../utils/constants";  //corrected path
  //named import

const RestaurantCard=(props) => {     //instead of creating this RestaurantCard multiple times,create props(objectS) and use it as many times   
    const {resData}= props;

    const{cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } =resData?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo"
            alt="res-logo"
            src={
              CDN_URL+resData.info.cloudinaryImageId
            }
                />
            <h3>{name}</h3>  
            <h4>{cuisines.join(",")}</h4> 
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
};
export default RestaurantCard;