import React from "react";

import {useState, useEffect} from "react"
import { Details } from "../types/Interfaces";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

interface DetailsCompProps {
  album: Details
}


const DetailsPage=()=>{
    const [result, setResult] = useState<Details | null>(null);
    const [param, setParam] = useState(useParams().id);
 
 
    const getData = async () => {
      let response = await fetch(
       `https://striveschool-api.herokuapp.com/api/deezer/track/${param}`
      );
      try {
        if (response.ok) {
          let data = await response.json();
          setResult(data);
      
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
    }, []);

useEffect(()=>{
  console.log("The result: ", result)
},[result])

    return <div>
        <h1>Details:{param} {result?.album.id}</h1>
        
        <Card />
    </div>
        
    
}

export default DetailsPage