import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Result } from "../types/Interfaces";

const Homepage = () => {
  const [result, setResult] = useState<Result[]>([]);
  const [searchTerm, setSearchTerm] = useState("queen");

  const getData = async (query: string) => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
    );
    try {
      if (response.ok) {
        let data = await response.json();
        setResult(data.data);
        console.log("Data: ", data.data);
        console.log("✅ Everything is fine");
      } else {
        console.log("❌ Everything is fine");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    getData(searchTerm);
    console.log("Handle search: ", searchTerm);
  };
  useEffect(() => {
    // getData(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)} className="container mt-5">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          search
        </button>
      </form>
      <div className="row d-flex " >
      {
      result.map((album) => (
          

              <Card key={album.id} album={album} />
          
      ))
      
      }
      </div>
    </div>
  );
};

export default Homepage;
