import React from "react";
import { useState, useEffect } from "react";
import styles from "./Countries.module.css";
  const Countries = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    var backendPoint = "https://xcountries-backend.azurewebsites.net/all";
    try {
      const response = await fetch(backendPoint)
      if(!response.ok){
        throw new Error("HTTP error! Status: "+ response.status);
      }
      const result = await response.json();
      // const fnlres = await JSON.stringify(result);
      //console.log("result in fetchData" + result);
      setData(result);
     // console.log("usestate data" + data);
    } catch (error) {
      console.error("error in fetchData method"+error);
    }
  }
  useEffect(()=>{    
    fetchData(); }, []);

    return <>
    <div className={styles.container}>
    {data.length>0?(data.map((country)=>( 
      <div className={styles.card}>
        <div><img src={country.flag} alt={country.abbr} /></div>
        <div><h3>{country.name}</h3></div>
      </div>  
   
    ))):("something wrong")
    
  }
  </div>
    
        </>
}

export default Countries;
