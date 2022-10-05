import logo from './logo.svg';
import './App.css';
import { Login } from './components/login';
import { Home } from './components/home';
import { Navbar } from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getState, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Cart } from './components/cart';
import { SingleProduct } from './components/singleProduct';


function App() {
  const [myState3,setMyState3] = useState(false);
  // const [myState2,setMyState2] = useState(false);
  
  store.subscribe(()=>setMyState3(store.getState().token));
  // let x=store.getState()
  // const [auth, setAuth] = useState(false)
  // let myState = useSelector((state) => { return state.token })
  // 
  // console.log('myState2',myState2)
  // console.log('x',x);
  useEffect(() => {
    // setAuth(store.getState().token)
    // setMyState2(store.getState().token);
  }, [myState3]
  )
  // console.log('using Use selector',mystate)
  // console.log('using getState',x) 
  // console.log('auth',state)


  return (

    <BrowserRouter>
      <div className="App">
        {/* {myState3 ? <h2>true</h2> : <h2>false</h2>} */}
        {/* <h1>{useSelector((bag)=>{return bag.token})}</h1> */}

        <Navbar/>
        <Routes>
          {myState3 ?
            <>

              <Route path='/home' element={<Home/>} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/:id' element={<SingleProduct />} />
            </>
            :
            <>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Login />} />
            </>
          }
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
