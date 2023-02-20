import { useEffect, useState } from "react";

const CartCard = ({name, price, image_src, id,  number, delete_this_item, update_product_number})=>{

    const [item_number, setItem_number] = useState(number);

    const addOneMore = ()=>{
        setItem_number(item_number+1);
    }

    const minusOneMore = ()=>{
        if(item_number>1)
        {
            setItem_number(item_number-1);
        }
    }

    const inputChange = (event)=>{
        const targetValue = event.currentTarget.value;
        if (targetValue>=1)
        {
            setItem_number(Number(targetValue));
        }
    }

    useEffect(
        ()=>{
            update_product_number(id, item_number);
        }, [item_number]
    )


    return (
    <div className="cart-card">
        <img src={image_src}></img>
        <div className="cart-card-line-1">
            <span className="cart-card-name">{name}</span>
            <span className="price">{price} gem per unit</span>
        </div>
        <div className="cart-card-line-2">
            <span>Buy&nbsp;</span>
            <div className="cart-quantity">
                <button className="btn minus1" onClick={minusOneMore}>-</button>
                <input className="cart-quantity-input" onChange={inputChange} type="number" value={item_number} min="1"></input>
                <button className="btn add1" onClick={addOneMore}>+</button>
            </div>
            <button className="remove-from-cart" onClick={()=>{delete_this_item(id);}}>Remove from cart</button>
        </div>
    </div>)
}

export default CartCard;