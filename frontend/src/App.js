import {Helmet} from "react-helmet";
import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROOT from "./routes";


import { useEffect, useState } from "react";
import dataContexts from "./context/Context";






function App() {
  const root=createBrowserRouter(ROOT)
  const [data,setData]=useState([])
  const [original,setOriginal]=useState([])
 
useEffect(()=>{
  axios.get("http://localhost:8080/blog").then(res=>{
    setData(res.data)
    setOriginal(res.data)
  })
},[])

  
  const value={
data,setData,original,setOriginal
  }
  return (
    <div className="App">
      <Helmet>
        <title>My Title</title>
    </Helmet>
      <dataContexts.Provider value={value}>
      <RouterProvider router={root}/>
      </dataContexts.Provider>

    </div>
  );
}

export default App;
