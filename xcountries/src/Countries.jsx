import React from "react";
import { useState, useEffect } from "react";
import styles from "./Countries.module.css";
  const Countries = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
   
    try {
        const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
        
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
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
