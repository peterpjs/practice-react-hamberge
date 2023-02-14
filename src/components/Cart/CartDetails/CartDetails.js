import React, {useContext, useState} from 'react';
import classes from './CartDetails.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import Backdrop from "../../UI/Backdrop/Backdrop";
import CartContext from "../../../store/cart-context";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";
const CartDetails = () => {
    const ctx=useContext(CartContext)

    const [showConfirm,setShowConfirm]=useState(false);

    const showConfirmHandler=(e)=>{
        setShowConfirm(true)
    }
    const  okHandler=()=>{
        ctx.clearCart();
    }
    const cancelHandler=(e)=>{
        e.stopPropagation();
        setShowConfirm(false)
    }
    return (
            <Backdrop  >
                {showConfirm && <Confirm confirmText={'确认清空购物车吗？'}  onCancel={cancelHandler} onOk={okHandler}/>}
                <div className={classes.CartDetails} onClick={e=>e.stopPropagation()}>
                    <header className={classes.Header}>
                        <h2 className={classes.Title}>餐品详情</h2>
                        <div onClick={showConfirmHandler}
                            className={classes.Clear}>
                            <FontAwesomeIcon  icon={faTrash}/>
                            <span >清空购物车</span>
                        </div>
                    </header>
                    <div className={classes.MealList}>
                        {
                            ctx.items.map(item=><Meal noDesc key={item.id} meal={item}/>)
                        }
                    </div>
                </div>
            </Backdrop>

    );
};

export default CartDetails;
