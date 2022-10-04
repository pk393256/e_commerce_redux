import { NavLink,useNavigate } from 'react-router-dom';
import { useSelector,getState } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { notAllow } from '../redux/action';
import store from '../redux/store';
// import {Link} from 'react-router-dom';
export function Navbar() {
    // let [auth, setAuth] = useState(false);
    // let myState = useSelector((state) => { return state.token })
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [myState3,setMyState3] = useState(false);
  store.subscribe(()=>setMyState3(store.getState().token));
  useEffect(() => {
    // setAuth(store.getState().token)
    // setMyState2(store.getState().token);
  }, [myState3]
  )
    // let myState2= store.getState().token;
    function logOut(){
        dispatch(notAllow())
        console.log('logout',store.getState())
        // console.log('logout',myState)
        // setAuth(store.getState().token)
        navigate('/')
    }
    
    return (
        <>
            {/* <h1 style={{color:'red'}}>abc</h1> */}
            {/* <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link> */}
            
            {myState3 ?
                <>
                <div style={{display:'flex',gap:'30%',marginLeft:"20%"}}>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/cart'>Cart</NavLink>
                    <button onClick={logOut}>Logout</button>
                </div>
                </>
                :
                <></>
            }
        </>
    )
}