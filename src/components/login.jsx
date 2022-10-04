import { useState, useEffect } from "react"

import { useDispatch, useSelector, getState, subscribe } from 'react-redux';
import store from "../redux/store";
import { allow,notAllow } from "../redux/action";
import { useNavigate } from "react-router-dom";
export function Login() {
    const [signIn, setSignIn] = useState({});
    const [status, setStatus] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const state = useSelector(state => state.state)
    
    // console.log(state)
    function submit(e) {
        e.preventDefault()
        // console.log(email,password)
        let data = { email, password };
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
            .then((recievedData) => { setSignIn(recievedData) })

    }
    useEffect(
        () => {
            console.log('token',signIn)
            
            if(signIn.hasOwnProperty('token')){
            if (signIn.token == 'QpwL5tke4Pnpja7X4') {
                setStatus(true)

                // console.log(true)
                dispatch(allow())
                navigate('/home')
                // console.log(store.getState())
                // store.subscribe(()=>{console.log('store',store.getState())})

            } else {
                // store.subscribe(()=>{console.log('store',store.getState())})
            }
        }else{
            setStatus(false)
            dispatch(notAllow())
            // console.log(store.getState())
        }

    }
    , [signIn])


    return (
        <>
            <form onSubmit={submit}>


                <input
                    type='text'
                    placeholder="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input
                    type='text'
                    placeholder="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <input type='submit' />
            </form>
        </>
    )
}