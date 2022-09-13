import { BsFillCartFill } from "react-icons/bs";

function CartWidget(){
return(
    <div>
        <span><button type="button" className="btn__carrito"><BsFillCartFill /></button></span>
    </div>
);
}

export default CartWidget;