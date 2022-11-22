// import {useState} from "react"

import {useDispatch} from "react-redux"
import { setObj1} from "../Slice"
import {setObj2} from "../Slice"
import {setObj3} from "../Slice"
import {setObj4} from "../Slice"
import { useSelector } from "react-redux"


const Header =_=>{

    const dispatch = useDispatch();
    const container1 = useSelector(state => state.allowbtn)

    
    return(
        <>
        <div className="header" >

        <select className="button" onClick={(e)=>{
            dispatch(setObj1(e.target.value))
        }}>
            <option>Allow Edit</option>
            <option>Locked</option>
          

        </select>

        <select className="button" onChange={(e)=>{
            if(container1==="Allow Edit"){
                dispatch(setObj2(e.target.value))
            }
        }}>
            <option>Black</option>
            <option>Blue</option>
            <option>Green</option>
           

        </select>

        <select className="button" onChange={(e)=>{
            if (container1==="Allow Edit") {
                dispatch(setObj3(e.target.value))
            }
        }}>
            <option>12</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
          

        </select>
        <select className="button" onChange={(e)=>{
            if (container1==="Allow Edit") {
                dispatch(setObj4(e.target.value))
            }
        }}>
            
           
            <option value="'Xanh Mono', monospace">Monospace</option>
            <option value="'Passion One', cursive"> Xanh Mono </option>
            <option value="'Yanone Kaffeesatz', sans-serif">Nova Mono</option>
         
        </select>
        </div>
       
               
        </>


    )

}
export default Header;