import { useSelector } from "react-redux";
import FoodItem from "./Fooditem";

const Cart = () => {

    const cartItems = useSelector( store => store.cart.items );
    return (
        <div className="cart-container">
        {
            cartItems.map((item) => (
                <FoodItem key = {item.id} {...item}/>
            ))
        }
            
    </div>
    )
    
};

export default Cart;