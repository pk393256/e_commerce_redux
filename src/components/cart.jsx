import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Cart() {
    const [allData, setAllData] = useState([]);
    const [singleData,setSingleData] = useState({})
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    async function fetchAllCartData() {
        let res = await fetch('http://localhost:8080/cart')
        let data = await res.json();
        setAllData(data)
        // let quantity = data.quantity;
        
    }
    // async function fetchData(id){
    //     let res = await fetch(`http:localhost:8080/cart/${id}`)
    //     let data = await res.json();
    //     setSingleData(data);
    // }
    
    async function post(quantity,id){
        await fetch(`http:localhost:8080/cart/${id}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({quantity:quantity})
        })
        console.log('after')
    }
    async function increase(id){
        console.log('increase id',id)
        let res = await fetch(`http://localhost:8080/cart/${id}`)
        let data = await res.json();
        console.log('dada to increase',data)
        setSingleData(data);
        let quantity = data.quantity+1;
        console.log('quantity',quantity)
        // post(quantity,id)
        await fetch(`http://localhost:8080/cart/${id}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({quantity:quantity})
        })
        // console.log('after')
        setCount(count+1)
    }
    async function decrease(id){
        console.log('decrease',id)
        let res = await fetch(`http://localhost:8080/cart/${id}`)
        let data = await res.json();
        console.log('dada to increase',data)
        setSingleData(data);
        let quantity = data.quantity;
        if(quantity>1){
            await fetch(`http://localhost:8080/cart/${id}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({quantity:quantity-1})
        })
        // console.log('after')
        setCount(count+1)
        }else{
            await fetch(`http://localhost:8080/cart/${id}`,{
                method:"DELETE",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            setCount(count+1)
        }
    }
    async function placeOrder(){

        // await fetch(`http://localhost:8080/cart`,{
        //     method:"PATCH",
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({cart:[]})
        // })
        // setCount(count+1)
        alert('oreder placed')
        navigate('/home')

    }


    useEffect(() => {
        fetchAllCartData()
    }, [count])
    return (
        <>
            {/* <h1>cart</h1> */}
            <table>
                <thead>
                    <tr>
                        <th>
                            Cart_id
                        </th>
                        <th>
                            Product_id
                        </th>
                        <th>
                            Quantity
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map((e) => (
                        <tr key={e.id}>
                            <th>
                                {e.id}
                            </th>
                            <th>
                                {e.product_id}
                            </th>
                            <th>
                                {e.quantity}
                            </th>
                            <th>
                                <button id={e.id} onClick={(e)=>increase(e.target.id)}>increase quantity</button>
                            </th>
                            <th>
                                <button id={e.id} onClick={(e)=>decrease(e.target.id)}>decrease quantity</button>
                            </th>

                        </tr>
                    ))}
                </tbody>
            </table>

                        <br/>
                        <br/>
                        <button onClick={placeOrder}>Place Order</button>




        </>
    )
}