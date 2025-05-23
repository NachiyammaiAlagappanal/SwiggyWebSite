import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "./data";
import Shimmer from "../shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);

  return (
    resList.length === 0 ? <Shimmer/> :
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
