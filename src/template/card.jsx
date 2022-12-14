import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Card({props}) {


    const navigate = useNavigate();
    //  props = {props}
    let data = props
    // console.log(data)
//   let data = {
//     "id": 1,
//     brand: "Roadster",
//     title: "cotton Checked Casual Shirt",
//     image:
//       "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg",
//     category: "men",
//     price: 844
//   };
  function details(x){
      navigate(`/${x}`)
  }

  return (
    <>
     
        <div style={{ border: "5px solid blue",width:"30%",marginLeft:'2%',marginBottom:'2%',paddingBottom:"5px" }}>
          <h1>{data.title}</h1>
          <img style={{width:'20%'}} src={data.image} />
          <br />
          <button id={data.id} onClick={(e)=>details(e.target.id)}>More Details</button>
        </div>
      
    </>
  );
}
