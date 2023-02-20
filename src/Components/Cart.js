
import CartCard from "./CartCard";

const Cart =(props)=>{

    const delete_this_item = (target_id)=>{
        props.changeItemNumberInCart(target_id,0);
    }

    const update_product_number = (target_id, value)=>{
        props.changeItemNumberInCart(target_id, value);
    }

    const  card_list =props.cart_game_list.map(
        (game, index)=>{
            if(props.number_in_cart[index]>0)
           return <CartCard
           delete_this_item = {delete_this_item}
           update_product_number = {update_product_number}
           key={game.id}
           id = {game.id}
           name={game.name}
           price={game.price}
           number = {props.number_in_cart[index]}
           image_src = {Object.values(game.image_src)[0]}
           ></CartCard>
        }
    )

    return (
        <div className="cart-page">
            <p className="prompt">You have selected {props.product_number} product(s), {props.item_number_sum} items in total, 
            need to pay {props.payment} gem in total.</p>
            
            {card_list}
        </div>
    )
}

export default Cart;