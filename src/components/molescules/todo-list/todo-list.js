import React from "react";
import { Fragment } from "react";
import styles from "./todo-list.module.css"
import { TiDeleteOutline } from 'react-icons/ti';
//TiDeleteOutline



export default function TodoList(props){
   


   return(
    <>
    <div className={styles.todo_style}>
       
    <li className={styles.liststyle} >
    
        {props.text}
        <TiDeleteOutline 
         className={styles.iconstyle}
         onClick={() => {
            props.onselect(props.key)
         }}
         />
    </li>
    </div>
   
    </>
   )
}