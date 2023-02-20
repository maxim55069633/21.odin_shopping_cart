import ShopCard from "./ShopCard";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShopPage = ({shop_game_list, number_in_cart, product_number, changeItemNumberInCart })=>{

    
    const  card_list =shop_game_list.map(
        (game, index)=>{

           return <ShopCard
           key={game.id}
           id = {game.id}
           name={game.name}
           price={game.price}
           rating={game.rating}
           image_src = {Object.values(game.image_src)[0]}
           number = {number_in_cart[index]}
           changeItemNumberInCart={changeItemNumberInCart}
           ></ShopCard>
        }
    )

    return (<div className="shop-page">
        <p className="prompt">Add your favorite products to the cart.</p>
        <div className="sticy-bar">
                <FontAwesomeIcon icon={faCartShopping} className="cart-icon"></FontAwesomeIcon>
                <div className="item-number">{product_number}</div>
        </div>
        <div className="shop-card-div">{card_list}</div>
    </div>)
}

export default ShopPage