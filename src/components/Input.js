import React,{useState} from 'react'
import "./Input.css"
import {useDispatch} from "react-redux";
import {saveTodo} from "../features/todoSlice"

function Input() {
    const [userInp, setUserInp] = useState('');

    const dispatch = useDispatch();

    

    const addTodo = () => { 
        dispatch(saveTodo({
            name: userInp,
            done: false,
            id: Date.now()
        }))
    }    

    return (
        <div className="input">
            <input type="text" onChange={e => setUserInp(e.target.value) } value={userInp} placeholder="Please Enter The Title Of The Current Todo"/>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}



export default Input;
