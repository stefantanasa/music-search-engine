import React from "react";

import {useState, useEffect} from "react"
import { Details, Result } from "../types/Interfaces";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";



const DetailsPage=()=>{
    const [result, setResult] = useState<Details[]>([]);
    const [param, setParam] = useState(useParams().id);
 
    console.log(result)
 
    const getData = async () => {
      let response = await fetch(
       ` https://striveschool-api.herokuapp.com/api/deezer/track/${param}`
      );
      try {
        if (response.ok) {
          let data = await response.json();
          setResult(data);
          console.log("Data: ", data);
          console.log("✅ Everything is fine");
        } else {
          console.log("❌ Something is wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
       
      getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param]);

useEffect(()=>{
  console.log("The result: ", result)
  

},[result])

    return <div>
        <h1>Details {result[0]?.album.title}</h1>
        
        <Card />
    </div>
        
    
}

export default DetailsPage