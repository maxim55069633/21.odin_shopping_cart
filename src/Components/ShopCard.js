import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar_regular } from "@fortawesome/free-regular-svg-icons";
import { nanoid } from "nanoid";
import { useState } from "react";

const ShopCard = ({name, price, rating, image_src, id,number, changeItemNumberInCart})=>{

    const rating_star = [1,2,3,4,5].map(
        (item)=>{

            const isGreater = item <=rating;
            const isBetween = item>rating && item-1 < rating;

            return (
                isGreater?  <FontAwesomeIcon key={"star-icon"+nanoid()} icon={faStar} /> :
                    (
                        isBetween? 
                        <FontAwesomeIcon key={"star-icon"+nanoid()} icon={faStarHalfStroke} />:
                        <FontAwesomeIcon key={"star-icon"+nanoid()} icon={faStar_regular} />
                    )
            )    
        }
    );

    const [item_number, setItem_number] = useState(number);

    const addOneMore = ()=>{
        setItem_number(item_number+1);
    }

    const minusOneMore = ()=>{
        if(item_number>=1)
        setItem_number(item_number-1);
    }

    const inputChange = (event)=>{
        const targetValue = event.currentTarget.value;
        if (targetValue>=1)
        setItem_number(Number(targetValue));
    }

    return (
        <div className="shop-card">
            <img src={image_src}></img>
            <span className="name">{name}</span>
            <span  className="star">
                {rating_star}&nbsp;
                {rating}</span>
            <span className="price">{price} gem per unit</span>

            <div className="shop-quantity">
                <button className="btn minus1" onClick={minusOneMore}>-</button>
                <input className="shop-quantity-input" onChange={inputChange}  type="number" value={item_number} min="0"></input>
                <button className="btn add1" onClick={addOneMore}>+</button>
            </div>

            <button onClick={()=>{changeItemNumberInCart(id, item_number);}}>Add to Card</button>
            <button>More Info</button>

        </div>
    )
}

export default ShopCard;