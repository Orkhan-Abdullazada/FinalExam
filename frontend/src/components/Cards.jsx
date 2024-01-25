import React, { useContext } from 'react'
import "./Cards.scss"

import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import dataContexts from '../context/Context';

const Cards = () => {
    const{data,setData,original,setOriginal}=useContext(dataContexts)
    const handleChange=(e)=>{
       const search= e.target.value.trim().toLowerCase()
       if(search==""){
        setData(original)
       }else{
        const searchedData=data.filter((data)=>data.name.trim().toLowerCase().includes(search))
        setData(searchedData)
       }
    }
    const handlelick=(e)=>{
        e.preventDefault()
        const sorted=data.sort((a,b)=>a.price-b.price)
        setData([...sorted])
    }
    const handlelic=(e)=>{
        e.preventDefault()
        const sorted=data.sort((a,b)=>b.price-a.price)
        setData([...sorted])
    }
  return (

    <div className='top'>
      <div className="middle">
   
        <div className="flex">
            <input onChange={(e)=>handleChange(e)}  className='search' type="text"  placeholder='search'/>
            <button onClick={(e)=>handlelick(e)} className='btn btn-primary'>Sort</button>
            <button onClick={(e)=>handlelic(e)} className='btn btn-info'>Sort</button>
        </div>
      </div>
      <div style={{paddingTop:"10%"}} className="container">
      <div  className="row">
 {
   data.map((item,index)=>(

    <div  key={index} className="cards col-4 col-lg-4 col-mb-6">
<div className="image">
<img src={item.image} alt="" />
</div>
<div className="write">
<p style={{"paddingTop":"20px"}}>{item.name}</p>
<p style={{"color":"gray"}}>${item.price}</p>
<div className="flex">
    <Link to={`${item._id}`}>Detail</Link>
</div>
</div>
<div className="open">
  <p>Trius Cabaernet France 2011</p>
  <p>639$</p>
  <div className="flexx">
  <FaStar style={{"color":"yellow"}} />
  <FaStar style={{"color":"yellow"}} />
  <FaStar style={{"color":"yellow"}} />
  <FaStar style={{"color":"yellow"}} />
  <FaStar style={{"color":"yellow"}} />


  </div>
  
</div>
    </div>

   ))
 }
 </div>
      </div>
    </div>
  )
}

export default Cards
