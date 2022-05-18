import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Result } from "../types/interfaces";

const Homepage =()=>{
const [result,setResult] = useState <Result []> ([])

const getData = async()=>{
    let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
    try {
        if(response.ok){
            let data = await response.json()
            setResult(data.data)
            console.log("Data: ",data.data)
            console.log("✅ Everything is fine")
        }else{

            console.log("❌ Everything is fine")
        }
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{ getData() },[])


    return <div>
        <Card/>
        
    </div>
}

export default Homepage