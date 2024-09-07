
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData'; 
import Shimmer from './Shimmer' 
import { useState,useEffect } from 'react';  //imported ReactHooks using named import
 


const Body=()=> {

  //Local state variable-Super powerful variable (React Hook -> useState)
const [listofRestaurant , setListofRestaurant] =useState(resList);       //created array to store resList data
const [filteredRestaurant ,setFliteredRestaurant] = useState([]);
const [searchText , setSearchText] = useState("");
//whenever the state variable updates,react triggers a reconciliation cycle(re-render the components)
 //called after 1 render,helpful in calling live Api  (React Hook -> useEffect)

// useEffect(() => {
//   fetchData();            //made api call
// },[]);      
// const fetchData = async () => {           //writing the function to fetch the data
// const data = await fetch(
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.141290748112464&lng=75.84227051585913&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// );    //fetching the API of swiggy
// //const json = await data.json();
// //console.log(json);
//   //const restaurants = json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//   //setListofRestaurant(restaurants);
//   //as soon as i got api data, i will re render the restaurant data with setListOfReastaurant
// };


    return listofRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="Filter">
              <div className="search">
                  <input type="text" className='search-box' value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);  //jitne alphabets typed in search section, utni bar page re render hoga {c=>re render,o=?re render,f=>re render.f=>re render....}
                  }}/>

                  <button onClick={()=>{
                      const filteredlist=listofRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText));  //made case sensitive through toLower()
                      setListofRestaurant(filteredlist)
                  }}>
                    Search
                    </button>
              </div>
              <button className="filter-btn" onClick={() => {
              const filteredList=listofRestaurant.filter((res) => res.info.avgRating > 4);   //filtering from res->info->avgRating jiski> 4 hogi usse
              setListofRestaurant(filteredList); // setListofRestaurant me updated resList value aa jayega fir wapas rendering hoga
            }}>
              Top Rated Restaurants
              </button>
              </div>
            <div className="res-container">
           {
            listofRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id}resData={restaurant}/>)) //mapping of data
           }
            </div>
        </div>
    );
};
export default Body;