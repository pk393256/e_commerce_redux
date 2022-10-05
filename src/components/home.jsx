

import { useEffect,useState } from "react"
import { Card } from "../template/card"



export function Home(){
    const [allData,setAllData] = useState([])
    async function fetchData(){
        let res=await fetch('http://localhost:8080/products')
        let data = await res.json()
        // console.log(data)
        setAllData(data)
    }
    useEffect(()=>{
        fetchData()
    },[])

    return (
    <>
        <h2>Home</h2>
        <div style={{display:'flex',flexWrap:"wrap",}}>
        {allData.map((e)=>(
            <Card key={e.id} props={e}/>
        ))}
        {/* <Card /> */}
        </div>
    </>
    )
}