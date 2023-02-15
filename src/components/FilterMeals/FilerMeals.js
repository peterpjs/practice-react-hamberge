import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from './FilerMeals.module.css'
const FilerMeals = (props) => {

    const [keyword,setKeyword]=useState('');
    useEffect(()=>{
        const timer=setTimeout(()=>{
            props.onFilter(keyword);
            console.log("aaaaaa")

        },1000 )
        return ()=>{
            clearTimeout(timer);
        }

    },[keyword])
    const inputChangeHandler= e=>{
        console.log("sdfsdfdfsdf")
        setKeyword(e.target.value.trim());
        // props.onFilter(keyword);
    }
    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter} >
                <input value={keyword} onChange={inputChangeHandler} className={classes.SearchInput}  type="text" placeholder={"请输入关键字"}/>
                <FontAwesomeIcon   className={classes.SearchIcon} icon={faSearch}/>
            </div>
        </div>
    );
};

export default FilerMeals;
