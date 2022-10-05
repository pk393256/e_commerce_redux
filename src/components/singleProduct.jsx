
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
export function SingleProduct() {
    const [productData, setProductData] = useState([{}])
    const [cartData, setCartData] = useState([{}])
    const [count, setCount] = useState(0)
    let { id } = useParams();
    const navigate=useNavigate();
    async function fetchProductData(id) {
        let res = await fetch(`http://localhost:8080/products/${id}`)
        let data = await res.json()
        // console.log(data)

        setProductData(data)
    }
    async function fetchCartData(id) {
        let res = await fetch(`http://localhost:8080/cart?product_id=${id}`)
        let data = await res.json()
        console.log('data',data[0])
        console.log(data[0].hasOwnProperty("quantity"))

        if (data.length > 0) {
            setCartData(data)
        } else {
            setCartData([{}])
        }

        // setCount(count+1)
    }
    async function addToCart() {
        setCount(count + 1)
        // console.log('productData', productData)
        // console.log('cartData', cartData)
        let data;
        if (productData.length > 0) {
            data = { "product_id": Number(cartData[0].id), quantity: (productData[0].quantity + 1) }
            // console.log('data', data)
        } else {
            data = { "product_id": Number(id), quantity: 1 }
        }
        // console.log()
        await fetch('http://localhost:8080/cart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        // console.log('added')

    }
    function goToCart(){
        console.log('navigate');
        navigate('/cart')
    }
    useEffect(() => {
        fetchProductData(id)
        console.log('productData', productData)
        console.log('useEffect1')
    }, [])
    useEffect(() => {
        fetchCartData(id)
        console.log('useEffect2')
        // console.log(cartData[0].hasOwnProperty("quantity"))
    }, [count])
    // console.log(id)
    return (
        <>
            {/* <h1>{id}</h1> */}
            <div>
                <h2>{productData.brand}</h2>
                <img src={productData.image} />
                <br />

                <h4><span style={{ marginRight: "30px" }}>{productData.category}</span>
                    <span>₹{productData.price}</span>
                </h4>
                {!cartData[0].hasOwnProperty("quantity") ?
                    <button onClick={addToCart}>Add To Cart</button>
                    :
                    <button onClick={goToCart}>Go to Cart</button>
                }

            </div>
        </>
    )
}