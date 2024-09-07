import { useEffect,useState } from "react";
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
    const [resInfo,setresInfo] = useState(null); //initially resInfo is null,when setresInfo update,data will be filled

    useEffect(() => {
        fetchMenu();
    },[]);  //due to empty data only one render will be done initially

    const fetchMenu = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.141290748112464&lng=75.84227051585913&restaurantId=419708&catalog_qa=undefined&submitAction=ENTER"
        );
        const json= await data.json();
        console.log(json);
        setresInfo(json.info)
    }

    return resInfo===null ? (
        <Shimmer/>
    ):(
        <div className="menu">
            <h1>resInfo?.data?.cards[2]?.cards?.cards?.info?.name</h1>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
         
    );
};
//export default RestaurantMenu;