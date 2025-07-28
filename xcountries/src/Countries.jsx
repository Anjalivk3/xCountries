import React from "react";
import { useState, useEffect } from "react";
import styles from "./Countries.module.css";
  const Countries = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    var backendPoint = "https://xcountries-backend.azurewebsites.net/all";
    try {
        const response = await fetch(backendPoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching data: catch block", err);
      } finally {
        console.log("Finally Block");
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
