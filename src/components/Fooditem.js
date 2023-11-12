import { ITEM_IMG_CDN_URL } from "../constants";
import {removeItem} from "../utils/cartSlice";
import { useDispatch } from "react-redux";



const FoodItem = ({ imageId, name, description, price,id  }) => {

    
  const dispatch = useDispatch();

    
  return (
    <div className="restaurant-menu-content ">
      <div className="menu-items-container">
        <div className="menu-items-list">
          <div className="menu-item ">
           <div className="menu-item-details ">
            <h3 className="item-title" >{name}</h3>
            <p className="item-cost" >Rupees: {price / 100}</p>
            <p className="item-desc" >{description}</p>
           </div>
           <div className="menu-img-wrapper" >
            <img className="menu-item-img" src={ITEM_IMG_CDN_URL + imageId} />
            <button class="add-btn"  onClick={() => {
              dispatch(removeItem(id));
            }}> Remove <i className="fa-solid fa-trash"></i></button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
