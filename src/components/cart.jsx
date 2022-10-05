import {useEffect,useState} from 'react';


export function Cart(){
    const [allData,setAllData] = useState([])
    async function fetchAllCartData(){
        let res = await fetch('http://localhost:8080/cart')
        let data = await res.json();
        setAllData(data)
    }
useEffect(()=>{
    fetchAllCartData()
},[])
    return (
        <>
        <h1>cart</h1>
        
        </>
    )
}