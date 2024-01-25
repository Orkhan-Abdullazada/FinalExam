import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
    const{id}=useParams()
    const [item,setItem]=useState([])

  
  useEffect(()=>{

    axios.get(`http://localhost:8080/blog/${id}`).then(res=>{
      setItem(res.data)
 
    })
  },[])
  return (
    <div>
        <div   className="cards col-4 col-lg-4 col-mb-6">
<div className="image">
<img src={item.image} alt="" />
</div>
<div className="write">
<p>{item.name}</p>
<p>{item.price}</p>
<div className="flex">

</div>
</div>
    </div>
    </div>
  )
}

export default Detail
