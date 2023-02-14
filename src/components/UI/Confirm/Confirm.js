import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import classes from './Confirm.module.css'
const Confirm = (props) => {
    return (
   <Backdrop onClick={props.onCancel} className={classes.ConfirmOuter}>
       <div className={classes.Confirm}>
           <p className={classes.ConfirmText}>
               确认清空购物车吗？
           </p>
           <div>
               <button className={classes.Cancel} onClick={(e)=>{props.onCancel(e)}}>取消</button>
               <button className={classes.Ok}  onClick={(e)=>{props.onOk(e)}}>确认</button>
           </div>
       </div>
   </Backdrop>
    );
};

export default Confirm;
